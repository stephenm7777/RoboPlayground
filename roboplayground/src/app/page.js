import Image from "next/image";

export default function Home() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">🤖 Welcome to RoboPlayground</h1>
      <p className="text-lg text-gray-600">Build, simulate, and control your own robots in the browser.</p>
      <a href="/simulator" className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Launch Simulator
      </a>
    </main>
  );
}
