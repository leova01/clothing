"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

export function TshirtModel() {
    const group = useRef<Group>(null);
    const { scene } = useGLTF("/3d/tshirt/tshirt.gltf");

    return (
        <group ref={group} dispose={null} position={[0, -3, 0]} scale={2.5}>
            <primitive object={scene} />
        </group>
    );
}

useGLTF.preload("/3d/tshirt/tshirt.gltf");
