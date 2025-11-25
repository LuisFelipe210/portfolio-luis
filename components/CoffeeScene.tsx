import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { ThreeElements } from '@react-three/fiber';
import { extend } from '@react-three/fiber';

extend(THREE);
declare global {
    namespace JSX {
        interface IntrinsicElements extends ThreeElements {}
    }
}

// Geometria procedural do grão de café (Mantida a otimização de 24 segmentos)
const createCoffeeBeanGeometry = () => {
    const geometry = new THREE.SphereGeometry(1, 24, 24);
    const posAttribute = geometry.attributes.position;
    const v = new THREE.Vector3();

    for (let i = 0; i < posAttribute.count; i++) {
        v.fromBufferAttribute(posAttribute, i);

        // Formato
        v.x *= 1.5;
        v.y *= 0.65;
        v.z *= 1.1;

        // Curvatura
        const bend = Math.pow(v.x, 2) * 0.15;
        v.z -= bend;

        // O corte central
        if (v.y > 0) {
            const seamWiggle = Math.sin(v.x * 3) * 0.1;
            const distToSeam = Math.abs(v.z - seamWiggle);
            const seamDepth = Math.max(0, 1 - distToSeam * 2.5);
            v.y -= seamDepth * 0.4;
            if (distToSeam < 0.3) v.z *= 0.9;
        }

        posAttribute.setXYZ(i, v.x, v.y, v.z);
    }

    geometry.computeVertexNormals();
    return geometry;
};

// Componente da Nuvem de Grãos com lógica de animação condicional
const BeanCloud = ({ count, isMobile }) => {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const light = useRef<THREE.PointLight>(null);

    // Gera a geometria e material apenas uma vez
    const beanGeometry = useMemo(() => createCoffeeBeanGeometry(), []);

    const beanMaterial = useMemo(() => new THREE.MeshStandardMaterial({
        color: "#2c1a16",
        roughness: 0.9,
        metalness: 0.0,
        flatShading: true, // Adicionei flat shading para otimização
    }), []);

    // Gera as partículas e seus fatores de movimento (depende de count e isMobile)
    const particles = useMemo(() => {
        const temp = [];
        // Reduzimos a dispersão no mobile
        const dispersion = isMobile ? 100 : 500;

        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.001 + Math.random() / 500;
            const xFactor = -dispersion + Math.random() * dispersion * 2;
            const yFactor = -dispersion + Math.random() * dispersion * 2;
            const zFactor = -dispersion + Math.random() * dispersion * 2;
            const scale = 0.4 + Math.random() * 0.4; // Mantive a escala pequena

            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, scale });
        }
        return temp;
    }, [count, isMobile]);

    const dummy = new THREE.Object3D();

    useFrame((state) => {
        if (!mesh.current) return;

        // Se for desktop, anima a luz e os grãos
        if (!isMobile) {
            if (light.current) {
                light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, state.mouse.x * 20, 0.1);
                light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, (state.mouse.y * 20), 0.1);
            }
        }

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor, scale } = particle;

            if (!isMobile) {
                // ANIMAÇÃO DE MOVIMENTO: SÓ NO DESKTOP
                t = particle.t += speed;
            }
            // A rotação sempre deve acontecer para a luz bater certo
            const s = Math.cos(t);

            // Posição: Usa os fatores de dispersão, mas a animação t só avança no desktop
            dummy.position.set(
                (particle.xFactor + (Math.cos(t) * xFactor) + (Math.sin(t * 1) * factor) + (Math.cos(t * 2) * factor)) / 100, // Ajustei divisor para 100
                (particle.yFactor + (Math.sin(t) * yFactor) + (Math.cos(t * 2) * factor) + (Math.cos(t * 1) * factor)) / 100, // Ajustei divisor para 100
                (particle.zFactor + (Math.cos(t) * zFactor) + (Math.sin(t * 3) * factor) + (Math.cos(t * 2) * factor)) / 100  // Ajustei divisor para 100
            );

            dummy.scale.set(scale, scale, scale);
            // Rotação: Mantive a rotação para os grãos não parecerem um desenho 2D estático
            dummy.rotation.set(s * 5 + t * 0.1, t * 0.1, s * 2 + t * 0.1);
            dummy.updateMatrix();

            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <>
            <pointLight ref={light} distance={40} intensity={80} color="#e34234" decay={1.5} />
            <instancedMesh ref={mesh} args={[beanGeometry, beanMaterial, count]} frustumCulled={false} />
        </>
    );
};

const CoffeeScene = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // ** OTIMIZAÇÃO: Não renderizar a cena 3D no mobile. **
    if (isMobile) {
        return null;
    }

    // Contagem e velocidade padrão para Desktop
    const count = 40;
    const floatSpeed = 1.0;

    return (
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
            <Canvas
                dpr={[1, 1.5]}
                gl={{
                    antialias: false,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: true
                }}
                camera={{ position: [0, 0, 10], fov: 60 }}
            >
                <ambientLight intensity={0.5} color="#ffffff" />
                <directionalLight position={[15, 10, 5]} intensity={2} color="#ffffff" />
                <directionalLight position={[-10, -5, -5]} intensity={1} color="#e34234" />

                {/* Float com velocidade zero no mobile (Agora isMobile é sempre false aqui) */}
                <Float speed={floatSpeed} rotationIntensity={0.5} floatIntensity={0.2}>
                    <BeanCloud count={count} isMobile={false} />
                </Float>

                <fog attach="fog" args={['#fdf8f6', 15, 35]} />
            </Canvas>
        </div>
    );
};

export default CoffeeScene;