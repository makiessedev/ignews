import Image from "next/image";
import { SubscribeButton } from "./components/SubscribeButton";
import { Price } from "./components/Price";

export default async function Home() {
  return (
    <main className="max-w-[1120px] mx-auto px-8 h-[calc(100vh-5rem)] flex items-center justify-between">
      <section className="max-w-[600px]">
        <span className="text-2xl font-bold leading-[4.5rem]">👏 Hey, Welcome</span>
        <h1 className="text-7xl font-black mt-10">
          News about the 
          <span className="text-cyan-500">
          {' '}React{' '}
          </span> 
          World.
        </h1>
        <p className="text-2xl mt-6">
          Get access to all the publications <br />
          <Price />
        </p>
        <SubscribeButton />
      </section>
      <Image src='/avatar.svg' alt="Girl coding" width="336" height="521"/>
    </main>
  )
}
