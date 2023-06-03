import { ContactContext, ContactData } from "@/providers/ContactsProvider";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import ModalForm from "../Modal/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "../Register Form/validator";
import Input from "../Input";
import ModalDashDelete from "../Modal/modalDelete";

const Card = () => {
  const { contacts, deleteContact, GetAccContacts, updateContact } =
    useContext(ContactContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setId] = useState<string>();
  const [mode, setMode] = useState("");

  const { register, handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(ContactSchema),
  });
  const [size, setSize] = useState("xl");

  const openModal = () => {
    onOpen();
  };

  const onSubFunction = (data: ContactData) => {
    updateContact(data, id!);

    onClose();
  };

  return (
    <>
      <ul className="flex flex-col w-2/3 gap-1 p-10">
        <AnimatePresence>
          {contacts ? (
            contacts.map((el) => (
              <motion.li
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ listStyle: "none" }}
                key={el.id}
                className="bg-white text-black rounded-md border-blue-600 border-2 flex   w-full  gap-"
              >
                <div className="flex  w-48 flex-col gap-2 p-3">
                  <span className="w-1/4">Nome</span>
                  <span>{el.full_name}</span>
                </div>

                <div className="flex flex-col w-48 gap-2 p-2">
                  <span className="w-1/4">Email</span>
                  <span className="w-3/4">{el.email}</span>
                </div>

                <div className="flex flex-col w-48 gap-2 p-2">
                  <span className="w-1/4">Celular</span>
                  <span>{el.telephone}</span>
                </div>

                <div className="flex w-60 justify-center gap-6 p-2">
                  <button>
                    <GrEdit
                      onClick={() => {
                        setMode("update");
                        openModal();
                        setId(el.id);
                      }}
                      className="fill-black text-2xl"
                    />
                  </button>
                  <motion.button
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ listStyle: "none" }}
                  >
                    <AiOutlineDelete
                      onClick={() => {
                        setMode("delete");
                        setId(el.id);
                        openModal();
                      }}
                      className="fill-red-600 text-2xl"
                    />
                  </motion.button>
                </div>
              </motion.li>
            ))
          ) : (
            <div>Você ainda não possui nenhum contato.</div>
          )}
        </AnimatePresence>

        {mode == "update" ? (
          <Modal
            onClose={onClose}
            closeOnOverlayClick
            size={size}
            isOpen={isOpen}
          >
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
                  Atualizar contato
                </h2>
                <ModalForm onClose={onClose} mode={mode} id={id} />
              </ModalBody>
            </ModalOverlay>
          </Modal>
        ) : (
          <ModalDashDelete isOpen={isOpen} onClose={onClose} id={id!} />
        )}
      </ul>
    </>
  );
};

export default Card;
