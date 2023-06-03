"use client";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { RegisterData, RegisterSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/services/api";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useAuth } from "@/hooks/useAuth";

const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });

  const { RegisterFunction } = useAuth();

  const grootBG =
    "https://c4.wallpaperflare.com/wallpaper/224/829/129/digital-digital-art-artwork-illustration-simple-hd-wallpaper-preview.jpg";
  return (
    <div
      className="max-w-md w-1/2  rounded-md shadow-md bg-opacity-75 p-8 mt-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${grootBG})`,
      }}
    >
      <div className="flex w-2/2 justify-between items-center ">
        <h2 className="text-2xl font-bold  mb-6">Cadastre-se</h2>

        <Link href="/">
          <AiOutlineArrowLeft className="text-xl relative bottom-4" />
        </Link>
      </div>

      <form className="space-y-2" onSubmit={handleSubmit(RegisterFunction)}>
        <Input
          type="text"
          id="name"
          placeholder="Seu nome"
          label="Nome"
          {...register("name")}
        />

        <Input
          type="email"
          id="email"
          placeholder="example@mail.com"
          label="Email"
          {...register("email")}
        />

        <Input
          type="password"
          id="password"
          placeholder="Sua senha"
          label="Senha"
          {...register("password")}
        />

        <Input
          type="text"
          id="telephone"
          label="Celular"
          {...register("telephone")}
        />

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            Enviar
          </button>

          <Link href={"/login"}>Ir para Login</Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
