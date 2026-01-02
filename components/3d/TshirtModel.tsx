"use client";

import { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { Group } from "three";
import { useTexture as useTextureContext } from "@/contexts/TextureContext";

function TshirtDecal({ textureUrl }: { textureUrl: string }) {
    const decalTexture = useTexture(textureUrl);

    return (
        <mesh position={[0, 0.4, 0.05]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.01, 32, 1, true, 0, Math.PI]} />
            <meshBasicMaterial
                map={decalTexture}
                transparent={true}
                opacity={1}
                side={[2]} // DoubleSide
            />
        </mesh>
    );
}

export function TshirtModel() {
    const meshRef = useRef<Group>(null);
    const { scene } = useGLTF("/3d/tshirt/tshirt.gltf");
    const { texture: textureUrl } = useTextureContext();

    return (
        <group ref={meshRef} dispose={null} position={[0, -3, 0]} scale={2.5}>
            <primitive object={scene} />
            {textureUrl && <TshirtDecal textureUrl={textureUrl} />}
        </group>
    );
}

useGLTF.preload("/3d/tshirt/tshirt.gltf");
