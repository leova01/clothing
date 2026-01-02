"use client";

import { useTexture } from "@react-three/drei";

interface DecalComponentProps {
    textureUrl: string;
}

export function DecalComponent({ textureUrl }: DecalComponentProps) {
    const decalTexture = useTexture(textureUrl);

    return (
        <mesh position={[0, 0.3, 0.15]} rotation={[0, 0, 0]} scale={[0.6, 0.6, 0.01]}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial
                map={decalTexture}
                transparent={true}
                opacity={1}
                side={[2]} // DoubleSide
            />
        </mesh>
    );
}
