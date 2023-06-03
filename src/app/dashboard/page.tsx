"use client";
import Card from "@/components/Card";
import { ContactContext, UserData } from "@/providers/ContactsProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ModalDash from "@/components/Modal/modal";
import { parseCookies } from "nookies";

const DashPage: React.FC = () => {
  const { GetAccContacts, contacts, setContact, user } =
    useContext(ContactContext);

  const router = useRouter();

  const cookies = parseCookies();

  const handleToken = () => {
    const token = cookies["user.Token"];

    if (!token) {
      return router.push("/login");
    }
  };

  setContact(user?.contacts);
  handleToken();
  useEffect(() => {
    GetAccContacts();
  }, []);

  return (
    <section
      className="flex justify-center "
      style={{
        minHeight: "94vh",
      }}
    >
      <div className="w-screen flex flex-col items-center ">
        <div className="w-2/4 p-2">
          <ModalDash />
        </div>

        <div className="p-2 w-full flex flex-col  items-center relative">
          <h2 className="relative -right-2.5">Contatos</h2>
          <Card />
        </div>
      </div>
    </section>
  );
};

export default DashPage;
