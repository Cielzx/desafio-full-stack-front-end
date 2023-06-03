"use client";
import Link from "next/link";
import Input from "../Input";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginData, LoginSchema } from "./validator";
import { useAuth } from "@/hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import api from "@/services/api";
import { parseCookies } from "nookies";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });
  const cookies = parseCookies();
  console.log(cookies);

  const { LoginFunction } = useAuth();

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
        <h2 className="text-2xl font-bold  mb-6">Login</h2>

        <Link href="/">
          <AiOutlineArrowLeft className="text-xl relative bottom-4" />
        </Link>
      </div>

      <form onSubmit={handleSubmit(LoginFunction)}>
        <Input
          type="email"
          id="email"
          placeholder="example@email.com"
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

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            Enviar
          </button>

          <Link className="border-b-4 border-grey-200" href={"/register"}>
            Registre-se
          </Link>
        </div>
      </form>
    </div>
  );
}
