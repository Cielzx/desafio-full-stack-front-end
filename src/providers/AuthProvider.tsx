"use client";
import { LoginData } from "@/components/Login Form/validator";
import { RegisterData } from "@/components/Register Form/validator";
import api from "@/services/api";
import { parseCookies, setCookie } from "nookies";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ContactContext } from "./ContactsProvider";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthValue {
  LoginFunction: (data: LoginData) => void;
  RegisterFunction: (data: RegisterData) => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthValue>({} as AuthValue);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(true);
  const { GetAccContacts } = useContext(ContactContext);
  const router = useRouter();

  const RegisterFunction = async (data: RegisterData) => {
    try {
      const response = await api.post("/users", data);
      toast.success("Usuario criado");

      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };

  const LoginFunction = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setCookie(null, "user.Token", token, {
        maxAge: 60 * 1500,
        path: "/",
      });
      toast.success("Logado com sucesso!");

      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error(`Credenciais invalidas`);
    }
  };

  return (
    <AuthContext.Provider value={{ LoginFunction, RegisterFunction, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
