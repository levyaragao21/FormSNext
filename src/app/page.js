import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col 
    items-center justify-center p-24 max-h-screen">
      <Image 
      src="/assets/woman.jpeg" 
      alt="logo" 
      width={1400} 
      height={1400} 
      style={{
        position: "absolute",
        overflow: "hidden",
        maxHeight: "100%",
        objectFit: "cover",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
     />
      <div className="absolute inset-0 bg-indigo-800 opacity-70" />

      <div className="flex min-w-full min-h-screen z-10 py-10">
        <div className="flex-1">
          <h1 className="text-white font-black text-3xl">Techbia</h1>
        </div>
        <div className="flex-1 flex justify-center items-center py-6 px-12">
          <div className="bg-white rounded-3xl min-w-full min-h-full flex justify-center items-center">
            F
          </div>
        </div>
      </div>
    </main>
  );
}
