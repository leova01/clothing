"use client";

import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    Environment,
    Grid,
    GizmoHelper,
    GizmoViewport,
} from "@react-three/drei";
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
                style={{ background: "#1a1a1a" }}
            >
                {/* Fondo gris oscuro */}
                <color attach="background" args={["#1a1a1a"]} />

                {/* Grid cuadriculado en el suelo */}
                <Grid
                    position={[0, -1, 0]}
                    args={[20, 20]}
                    cellSize={1}
                    cellThickness={0.5}
                    cellColor="#6b7280"
                    sectionSize={5}
                    sectionThickness={1}
                    sectionColor="#4b5563"
                    fadeDistance={25}
                    fadeStrength={1}
                    followCamera={false}
                    infiniteGrid
                />

                {/* Iluminación */}
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} />
                <pointLight position={[0, 5, 0]} intensity={0.5} />

                {/* Entorno para reflejos realistas */}
                <Environment preset="studio" />

                {/* Modelo de camiseta */}
                <TshirtModel />

                {/* Gizmo de referencia de ejes */}
                <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
                    <GizmoViewport
                        axisColors={["#ef4444", "#22c55e", "#3b82f6"]}
                        labelColor="white"
                    />
                </GizmoHelper>

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
