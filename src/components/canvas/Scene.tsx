"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Preload, Stars } from "@react-three/drei";

interface SceneProps {
    children: React.ReactNode;
}

export default function Scene({ children }: SceneProps) {
    return (
        <div className="canvas-container fixed inset-0">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <Environment preset="city" />
                    <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    {children}
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
}
