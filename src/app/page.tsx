import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Header />
        <Navbar />
      <main className="pt-[160px]">
        <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
      </main>
    </>
  );
}