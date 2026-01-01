import { TshirtScene } from "@/components/3d/TshirtScene";

export default function Home() {
    return (
        <div className="flex h-screen items-stretch bg-zinc-50 font-sans">
            <div className="flex w-full  flex-col md:flex-row">
                <div className="w-full  md:w-1/2 bg-black">
                    <TshirtScene />
                </div>
                <div className="w-full  md:w-1/2 bg-blend-lighten">
                    Panel de Herramientas
                </div>
            </div>
        </div>
    );
}
