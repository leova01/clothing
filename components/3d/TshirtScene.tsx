"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { TshirtModel } from "./TshirtModel";

export function TshirtScene() {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{
                    position: [0, 0, 3],
                    fov: 50,
                }}
                gl={{ preserveDrawingBuffer: true }}
            >
                {/* Iluminación */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} />
                <pointLight position={[0, 5, 0]} intensity={0.5} />

                {/* Entorno para reflejos realistas */}
                <Environment preset="studio" />

                {/* Modelo de camiseta */}
                <TshirtModel />

                {/* Controles orbitales para rotación y zoom */}
                <OrbitControls
                    enableDamping
                    dampingFactor={0.05}
                    minDistance={2}
                    maxDistance={5}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
}
