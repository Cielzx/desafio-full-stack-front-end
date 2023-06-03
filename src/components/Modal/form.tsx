import { UseFormHandleSubmit, useForm } from "react-hook-form";
import Input from "../Input";
import { ContactContext, ContactData } from "@/providers/ContactsProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "../Register Form/validator";
import { useContext } from "react";

interface handlerProps {
  onClose: () => void;
  mode?: string;
  id?: string;
}

const ModalForm = ({ onClose, mode, id }: handlerProps) => {
  const { register, handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(ContactSchema),
  });

  const { GetAccContacts, CreateContact, updateContact } =
    useContext(ContactContext);

  const onSubFunction = (data: ContactData) => {
    if (mode == "create") {
      CreateContact(data);
    } else if (mode == "update") {
      updateContact(data, id!);
    }

    onClose();
  };
  return (
    <form className="p-4" onSubmit={handleSubmit(onSubFunction)}>
      <Input
        type="Text"
        id="full_name"
        label="Nome"
        {...register("full_name")}
      />
      <Input type="email" id="email" label="Email" {...register("email")} />
      <Input
        type="Text"
        id="telephone"
        label="Telefone"
        {...register("telephone")}
      />

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 w-full text-white font-semibold px-4 py-2 rounded-md"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
