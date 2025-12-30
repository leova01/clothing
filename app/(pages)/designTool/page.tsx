import Image from "next/image";

export default function Home() {
    return (
        <div className="flex h-screen items-stretch bg-zinc-50 font-sans">
            <div className="flex w-full  flex-col md:flex-row">
                <div className="w-full  md:w-1/2 bg-blue-900 p-8">
                    Columna 1
                </div>
                <div className="w-full  md:w-1/2 bg-green-900 ">Columna 2</div>
            </div>
        </div>
    );
}
