"use client";
import api from "@/services/api";
import { parseCookies } from "nookies";
import {
  Dispatch,
  SetStateAction,
  createContext,
  use,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

interface ContactProvider {
  children: React.ReactNode;
}

export interface ContactData {
  id: string;
  full_name: string;
  email: string;
  telephone: string;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  telephone: string;
  contacts: ContactData[];
}

interface ContactValue {
  contacts: ContactData[] | null | undefined;
  user: UserData | null;
  GetAccContacts: () => void;
  setContact: Dispatch<SetStateAction<ContactData[] | null | undefined>>;
  setUser: Dispatch<SetStateAction<UserData | null>>;
  deleteContact: (id: string) => void;
  updateContact: (data: ContactData, id: string) => void;
  CreateContact: (data: ContactData) => void;
}

export const ContactContext = createContext<ContactValue>({} as ContactValue);

export const ContactProvider = ({ children }: ContactProvider) => {
  const [contacts, setContact] = useState<ContactData[] | null | undefined>();
  const [user, setUser] = useState<UserData | null>(null);

  const cookies = parseCookies();

  if (cookies["user.Token"]) {
    api.defaults.headers.common.authorization = `Bearer ${cookies["user.Token"]}`;
  }

  const GetAccContacts = async () => {
    try {
      const response = await api.get("/users/acc");
      setUser(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const CreateContact = async (data: ContactData) => {
    try {
      const response = await api.post("/contacts", data);
      toast.success("Contato criado!");
      GetAccContacts();
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };

  const deleteContact = async (id: string) => {
    try {
      const response = await api.delete(`/contacts/${id}`);
      GetAccContacts();
      toast.success("Deletado com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };

  const updateContact = async (data: ContactData, id: string) => {
    try {
      const response = await api.patch(`/contacts/${id}`, data);
      GetAccContacts();
      toast.success("Atualizado com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };

  return (
    <ContactContext.Provider
      value={{
        GetAccContacts,
        contacts,
        setContact,
        deleteContact,
        CreateContact,
        updateContact,
        user,
        setUser,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
