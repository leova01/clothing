"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Texture } from "three";

interface TextureContextType {
    texture: string | null;
    setTexture: (texture: string | null) => void;
}

const TextureContext = createContext<TextureContextType | undefined>(undefined);

export function TextureProvider({ children }: { children: ReactNode }) {
    const [texture, setTexture] = useState<string | null>(null);

    return (
        <TextureContext.Provider value={{ texture, setTexture }}>
            {children}
        </TextureContext.Provider>
    );
}

export function useTexture() {
    const context = useContext(TextureContext);
    if (context === undefined) {
        throw new Error("useTexture must be used within a TextureProvider");
    }
    return context;
}
