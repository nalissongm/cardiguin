"use client"
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-primary">Solicite seu crachá agora!</h1>
        <p>Peça agora seu crachá e acompanhe todo o processo.</p>
      </div>
      <Button onClick={() => alert("asd")}>Fazer pedido</Button>
      <Button
        variant="text"
        onClick={() => console.log("fsfd")}
      >
        Meus pedidos
      </Button>
    </main>
  );
}
