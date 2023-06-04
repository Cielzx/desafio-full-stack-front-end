"use client";
import { ReactNode, use, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ContactContext } from "@/providers/ContactsProvider";
import { ToastContainer } from "react-toastify";
import Dropdown from "@/components/DropDown/dropdown";
import { parseCookies } from "nookies";

interface LayoutChildren {
  children: ReactNode;
}

const LayoutDashboard = ({ children }: LayoutChildren) => {
  const router = useRouter();

  const cookies = parseCookies();

  const handleToken = () => {
    const token = cookies["user.Token"];

    if (!token) {
      return router.push("/login");
    }
  };

  handleToken();

  const grootGif =
    "https://media1.giphy.com/media/3o7aDcrsww5Ybp18hq/giphy.gif?cid=ecf05e47wxsxqtgz13upbhp328xnpl751oset25dxjqnu6w8&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  return (
    <>
      <header className="bg-gray-800">
        <div className="flex items-center justify-between space-x-4 p-1 pl-2 pr-2">
          <h1 className="text-white font-bold text-xl">
            Gerenciador de contatos
          </h1>
          <Dropdown />
        </div>
      </header>
      <main
        className="min-h-screen bg-no-repeat bg-cover bg-white-200"
        style={{
          backgroundImage: `url(${grootGif})`,
          backgroundPosition: "center",
          minHeight: "94vh",
        }}
      >
        {children}
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default LayoutDashboard;
