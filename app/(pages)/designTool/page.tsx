import { TshirtScene } from "@/components/3d/TshirtScene";
import { ImageUploader } from "@/components/ImageUploader";
import { TextureProvider } from "@/contexts/TextureContext";

export default function Home() {
    return (
        <TextureProvider>
            <div className="flex h-screen items-stretch bg-zinc-50 font-sans">
                <div className="flex w-full  flex-col md:flex-row">
                    <div className="w-full  md:w-1/2 bg-black">
                        <TshirtScene />
                    </div>
                    <div className="w-full  md:w-1/2 bg-white p-8 overflow-y-auto">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    Panel de Herramientas
                                </h2>
                                <p className="text-gray-600">
                                    Personaliza tu camiseta agregando imágenes y diseños
                                </p>
                            </div>

                            <div className="border-t pt-6">
                                <ImageUploader />
                            </div>

                            {/* Más herramientas se agregarán aquí */}
                        </div>
                    </div>
                </div>
            </div>
        </TextureProvider>
    );
}
