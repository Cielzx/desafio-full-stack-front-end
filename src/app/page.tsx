"use client";
import { useRouter } from "next/navigation";
import "../styles/custom.css";

export default function Home() {
  const router = useRouter();
  const grootBG =
    "https://c4.wallpaperflare.com/wallpaper/224/829/129/digital-digital-art-artwork-illustration-simple-hd-wallpaper-preview.jpg";

  const grootIcon =
    "https://i.pinimg.com/564x/57/92/15/57921516c9a84481af9c1b86a6b8d2bb.jpg";

  return (
    <main className="flex h-screen items-center justify-center">
      <div className=" container m-x-auro p-4 flex w-1/2 bg-white text-black h-screen items-center flex-col gap-2 justify-center relative">
        <div
          className="flex w-2/3 h-3/6 p-4  bg-contain bg-no-repeat bg-center flex-col items-center justify-center floating"
          style={{
            backgroundImage: `url(${grootIcon})`,
          }}
        >
          <p
            className="text-4xl  font-sans font-bold"
            style={{
              position: "absolute",
              top: "-23%",
              left: "7%",
            }}
          >
            Gerenciador de contatos
          </p>
        </div>

        <button
          onClick={() => router.push("/register")}
          className="bg-blue-500 relative top-28 rounded-md w-1/3 border-0 border-white px-4 py-2"
        >
          Registre-se
        </button>
      </div>

      <div className="w-1/2 h-screen flex justify-center items-center gap-2 flex-col relative">
        <img src={grootBG} alt="Groot background" className="object-cover" />

        <div
          className="w-2/3 p-4"
          style={{
            position: "relative",
            top: "-4%",
            right: "14%",
          }}
        >
          <p className="break-words">
            Revolucione a maneira como você gerencia seus contatos com o nosso
            app inovador! Desperte seu potencial social e simplifique sua vida
            com um único toque. Crie, visualize e gerencie seus contatos com
            agilidade e elegância. Aproveite o poder da organização e nunca mais
            perca uma oportunidade de conexão. Baixe agora e descubra o novo
            padrão de excelência em gerenciamento de contatos!
          </p>
        </div>

        <button
          onClick={() => router.push("/login")}
          className="bg-blue-500 rounded-md w-1/3 border-0 border-white px-4 py-2"
        >
          Login
        </button>
      </div>
    </main>
  );
}
