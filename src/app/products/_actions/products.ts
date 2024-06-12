"use server";

import { prisma } from "@/app/db/db";
import { schema } from "../_schema/formSchema";
import { redirect } from "next/navigation";

export type FormState = {
  status?: "success" | "failed";
  message: string;
  fields?: Record<string, string | number>;
};

export async function addProduct(
  prevState: FormState,
  data: FormData,
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    return {
      status: "failed",
      message: "Invalid form data",
      fields: parsed.data,
    };
  }

  try {
    await prisma.product.create({
      data: {
        category: parsed.data.category,
        description: parsed.data.description,
        name: parsed.data.name,
        salesPrice: parsed.data.salesPrice,
      },
    });
  } catch (error) {
    return {
      status: "failed",
      message: "Invalid form data",
      fields: parsed.data,
    };
  }

  redirect("/products");
}

export async function updateProduct(
  id: number,
  prevState: FormState,
  data: FormData,
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    return {
      status: "failed",
      message: "Invalid form data",
      fields: parsed.data,
    };
  }

  const product = await prisma.product.findUnique({ where: { id } });

  if (product === null)
    return {
      status: "failed",
      message: "Product not found",
      fields: parsed.data,
    };

  try {
    await prisma.product.update({
      where: { id },
      data: {
        category: parsed.data.category,
        description: parsed.data.description,
        name: parsed.data.name,
        salesPrice: parsed.data.salesPrice,
      },
    });
  } catch (error) {
    return {
      status: "failed",
      message: "Invalid form data",
      fields: parsed.data,
    };
  }

  redirect("/products");
}

export async function deleteProduct(id: number) {
  await prisma.product.delete({ where: { id } });
}
