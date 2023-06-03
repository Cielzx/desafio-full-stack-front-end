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

interface props {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

const ModalDashDelete = ({ isOpen, onClose, id }: props) => {
  const { contacts, deleteContact, GetAccContacts, updateContact } =
    useContext(ContactContext);
  const { register, handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(ContactSchema),
  });
  const [size, setSize] = useState("xl");

  return (
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
          <div className="p-4 flex flex-col gap-4">
            <h2>Realmente deseja deletar esse contato?</h2>

            <div>
              <button
                type="submit"
                onClick={() => {
                  deleteContact(id!);
                  onClose();
                }}
                className="bg-red-500 hover:bg-red- w-full text-white font-semibold px-4 py-2 rounded-md"
              >
                Deletar
              </button>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                onClick={() => onClose()}
                className="bg-blue-500 hover:bg-blue-600 w-full text-white font-semibold px-4 py-2 rounded-md"
              >
                cancelar
              </button>
            </div>
          </div>
        </ModalBody>
      </ModalOverlay>
    </Modal>
  );
};

export default ModalDashDelete;
