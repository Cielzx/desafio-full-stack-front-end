import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "../Register Form/validator";
import { ContactContext, ContactData } from "@/providers/ContactsProvider";
import ModalForm from "./form";

const ModalDash = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mode, setMode] = useState("");

  const [size, setSize] = useState("xl");

  const openModal = () => {
    onOpen();
  };

  return (
    <>
      <Modal onClose={onClose} closeOnOverlayClick size={size} isOpen={isOpen}>
        <ModalOverlay className="flex flex-col items-center justify-center bg-opacity-70 bg-black">
          <ModalBody
            className="w-3/5 flex flex-col justify-center items-center h-96 bg-opacity-70 bg-black"
            style={{
              position: "absolute",
              top: "12%",
              left: "25%",
            }}
          >
            <div className="flex w-3/4 justify-end">
              <ModalCloseButton />
            </div>
            <h2 className="border-2 p-2 rounded-lg bg-white bg-opacity-70 text-black border-blue-500">
              Crie seu contato
            </h2>
            <ModalForm onClose={onClose} mode={mode} />
          </ModalBody>
        </ModalOverlay>
      </Modal>

      <div className="flex justify-between items-center">
        <p>Criar novo contato</p>

        <button
          onClick={() => {
            openModal();
            setMode("create");
          }}
          className="bg-blue-500 flex items-center rounded-md h-11"
        >
          <AiOutlinePlus className="text-2xl" />
          Adiconar contato
        </button>
      </div>
    </>
  );
};

export default ModalDash;
