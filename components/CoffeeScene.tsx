// src/components/CoffeeScene.tsx
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// GEOMETRIA DO GRÃO (Mantive a lógica, mas se parecia urso, o tamanho menor ajuda a disfarçar)
const createCoffeeBeanGeometry = () => {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
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

const BeanCloud = ({ count = 300 }) => {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const light = useRef<THREE.PointLight>(null);

    const beanGeometry = useMemo(() => createCoffeeBeanGeometry(), []);

    const beanMaterial = useMemo(() => new THREE.MeshStandardMaterial({
        color: "#2c1a16",
        roughness: 0.9, // Aumentei a aspereza pra ficar menos "plástico"
        metalness: 0.0,
    }), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;

            // === MUDANÇA 1: VELOCIDADE ===
            // Antes era 0.005, baixei pra 0.001 (quase parando, bem zen)
            const speed = 0.001 + Math.random() / 500;

            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;

            // === MUDANÇA 2: TAMANHO ===
            // Antes era 0.8 a 1.4. Agora é 0.4 a 0.8 (metade do tamanho)
            const scale = 0.4 + Math.random() * 0.4;

            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, scale });
        }
        return temp;
    }, [count]);

    const dummy = new THREE.Object3D();

    useFrame((state) => {
        if (!mesh.current) return;

        if (light.current) {
            light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, state.mouse.x * 20, 0.1);
            light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, (state.mouse.y * 20), 0.1);
        }

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor, scale } = particle;

            // Aplica a velocidade reduzida
            t = particle.t += speed;
            const s = Math.cos(t);

            dummy.position.set(
                (particle.xFactor + (Math.cos(t) * xFactor) + (Math.sin(t * 1) * factor) + (Math.cos(t * 2) * factor)) / 10,
                (particle.yFactor + (Math.sin(t) * yFactor) + (Math.cos(t * 2) * factor) + (Math.cos(t * 1) * factor)) / 10,
                (particle.zFactor + (Math.cos(t) * zFactor) + (Math.sin(t * 3) * factor) + (Math.cos(t * 2) * factor)) / 10
            );

            dummy.scale.set(scale, scale, scale);
            dummy.rotation.set(s * 5 + t, t * 0.5, s * 2);
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
    return (
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
            <Canvas
                dpr={[1, window.innerWidth < 768 ? 1 : 1.5]}
                gl={{
                    antialias: false,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: true
                }}
                camera={{ position: [0, 0, 20], fov: 45 }}
            >
                <ambientLight intensity={0.5} color="#ffffff" />
                <directionalLight position={[15, 10, 5]} intensity={2} color="#ffffff" />
                <directionalLight position={[-10, -5, -5]} intensity={1} color="#e34234" />

                {/* === MUDANÇA 3: FLUTUAÇÃO GERAL MAIS LENTA === */}
                {/* speed=0.5 (era 1.5) e rotationIntensity=0.2 (era 0.5) */}
                <Float speed={1.0} rotationIntensity={0.5} floatIntensity={0.2}>
                    <BeanCloud count={80} />
                </Float>

                <fog attach="fog" args={['#fdf8f6', 15, 35]} />
            </Canvas>
        </div>
    );
};

export default CoffeeScene;