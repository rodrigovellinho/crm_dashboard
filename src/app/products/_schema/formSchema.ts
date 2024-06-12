import { z } from "zod";

export const schema = z.object({
  name: z.string().trim().min(1, "Por favor, insira um nome válido"),
  description: z
    .string()
    .trim()
    .min(1, "Por favor, insira uma descrição válida"),
  category: z.string().trim(),
  salesPrice: z.string().trim(),
});

export type FormSchema = z.infer<typeof schema>;
