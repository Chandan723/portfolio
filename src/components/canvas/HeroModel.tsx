"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Float, MeshDistortMaterial } from "@react-three/drei";

export default function HeroModel() {
    const meshRef = useRef<THREE.Mesh>(null);
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
        if (sphereRef.current) {
            const time = state.clock.getElapsedTime();
            sphereRef.current.position.x = Math.sin(time) * 3;
            sphereRef.current.position.z = Math.cos(time) * 3;
            sphereRef.current.position.y = Math.sin(time * 2) * 1;
        }
    });

    return (
        <group position={[2, 0, 0]} rotation={[0, -0.5, 0]}>
            <Float
                speed={2} // Animation speed
                rotationIntensity={1} // XYZ rotation intensity
                floatIntensity={2} // Up/down float intensity
            >
                <mesh ref={meshRef}>
                    <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                    <MeshDistortMaterial
                        color="#0ea5e9" // sky-500
                        emissive="#075985" // sky-800
                        roughness={0.1}
                        metalness={1}
                        distort={0.4}
                        speed={2}
                    />
                </mesh>
            </Float>

            {/* Orbiting Sphere */}
            <mesh ref={sphereRef} scale={0.3}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color="#6366f1" // indigo-500
                    emissive="#312e81"
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Background Accent Sphere */}
            <mesh position={[-2, -2, -2]} scale={0.5}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    color="#a855f7" // purple-500
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </group>
    );
}
