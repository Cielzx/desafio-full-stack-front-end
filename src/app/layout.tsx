import { AuthProvider } from "@/providers/AuthProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { ContactProvider } from "@/providers/ContactsProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desafio full Stack",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <AuthProvider>
        <ContactProvider>
          <body className={inter.className}>{children}</body>
        </ContactProvider>
      </AuthProvider>
    </html>
  );
}
