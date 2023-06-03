import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { Button, position } from "@chakra-ui/react";
import { ContactContext } from "@/providers/ContactsProvider";

const Dropdown = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setIsclicked] = useState(false);

  const { user } = useContext(ContactContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleButtoClick = () => {
    setIsclicked(!clicked);
  };

  const handleLogout = () => {
    localStorage.clear();
    return router.push("/login");
  };

  return (
    <div style={{ position: "relative" }}>
      <motion.button
        animate={{ rotateX: clicked ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-4xl"
        onClick={() => {
          handleToggle();
          handleButtoClick();
        }}
      >
        {clicked ? <IoIosArrowDropdown /> : <IoIosArrowDropleft />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="border-blue-600 border-2 flex flex-col gap-2"
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              width: "200px",
              background: "#fff",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "4px",
              padding: "16px",
            }}
          >
            {/* Conteúdo do dropdown */}
            <p className="text-black font-bold">Usuário:</p>
            <div className="flex flex-col gap-4">
              <label
                className="text-black w-12 bg-white rounded-md text-sm border-2 border-blue-600"
                style={{
                  width: "65px",
                  position: "absolute",
                  top: "37px",
                  left: "27px",
                }}
              >
                Nome
              </label>
              <span className="text-black border-blue-600 border-2 rounded-md p-2">
                {user?.name}
              </span>

              <label
                className="text-black bg-white w-12 rounded-md text-sm border-2 border-blue-600"
                style={{
                  width: "65px",
                  position: "absolute",
                  top: "98px",
                  left: "27px",
                }}
              >
                Email
              </label>
              <span className="text-black border-blue-600 border-2 rounded-md p-2">
                {user?.email}
              </span>

              <label
                className="text-black bg-white w-12 rounded-md text-sm border-2 border-blue-600"
                style={{
                  width: "65px",
                  position: "absolute",
                  top: "158px",
                  left: "27px",
                }}
              >
                Celular
              </label>
              <span className="text-black border-blue-600 border-2 rounded-md p-2">
                {user?.telephone}
              </span>
            </div>
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
