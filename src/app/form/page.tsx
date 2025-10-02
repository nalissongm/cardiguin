"use client"
import { Button } from "@/components/Button";
import Image from 'next/image'

export default function Home() {
  

  return (
    <main className="flex flex-col h-lvh justify-center max-w-[317px] w-full mx-auto">
      <Image alt="illustration" src="./illust.svg" width="300" height="300" className="mx-auto"/>
      <div className="content before:w-12 before:h-1 before:bg-[var(--primary)] before:block before:rounded-lg before:m-auto before:mt-13 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-primary">Eeeee!</h1>
          <p className="text-base">Fala meu mano.</p>
        </div>
      </div>
    </main>
  );
}
