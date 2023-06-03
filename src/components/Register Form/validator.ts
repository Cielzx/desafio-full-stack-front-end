import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().nonempty("Nome obrigatorio"),
  email: z.string().email("Email obrigatorio"),
  password: z.string().nonempty("Senha obrigatoria"),
  telephone: z.string().nonempty("Numero obrigatorio"),
});

export const ContactSchema = z.object({
  full_name: z.string().nonempty("Nome obrigatorio"),
  email: z.string().email("Email obrigatorio"),
  telephone: z.string().nonempty("Numero obrigatorio"),
});

export type RegisterData = z.infer<typeof RegisterSchema>;
