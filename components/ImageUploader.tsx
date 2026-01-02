"use client";

import { useRef, useState } from "react";
import { useTexture } from "@/contexts/TextureContext";

export function ImageUploader() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { texture, setTexture } = useTexture();
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (file: File | null) => {
        if (!file) return;

        // Validar que sea una imagen
        if (!file.type.startsWith("image/")) {
            alert("Por favor selecciona un archivo de imagen válido");
            return;
        }

        // Crear URL para la imagen
        const imageUrl = URL.createObjectURL(file);
        setTexture(imageUrl);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        handleFileSelect(file);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        handleFileSelect(file);
    };

    const handleRemove = () => {
        setTexture(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="space-y-4">
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Subir Imagen
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                    Arrastra una imagen o haz clic para seleccionar
                </p>
            </div>

            {!texture ? (
                <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                        isDragging
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-gray-400"
                    }`}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleInputChange}
                        className="hidden"
                    />
                    <div className="space-y-2">
                        <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                        >
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p className="text-sm text-gray-600">
                            Arrastra tu imagen aquí o haz clic para seleccionar
                        </p>
                        <p className="text-xs text-gray-500">
                            PNG, JPG, SVG hasta 10MB
                        </p>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="relative group">
                        <img
                            src={texture}
                            alt="Preview"
                            className="w-full h-48 object-contain border rounded-lg bg-gray-50"
                        />
                        <button
                            onClick={handleRemove}
                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Eliminar imagen"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Cambiar Imagen
                        </button>
                        <button
                            onClick={handleRemove}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
