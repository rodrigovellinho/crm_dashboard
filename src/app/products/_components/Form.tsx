"use client";

import { InputControl, InputRoot } from "@/components/Form/Input";
import SelectOptions from "@/components/Form/SelectOptions";
import RegisterInput from "../_components/RegisterInput";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProduct, updateProduct } from "../_actions/products";
import { useFormState } from "react-dom";
import { startTransition, useRef } from "react";
import { FormSchema, schema } from "../_schema/formSchema";
import { Product } from "@prisma/client";
import Link from "next/link";

export default function FormProduct({ product }: { product?: Product | null }) {
  const [state, formAction] = useFormState(
    product == null ? addProduct : updateProduct.bind(null, product.id),
    {
      message: "",
    },
  );
  const {
    register,
    formState: { errors },
  } = useForm<FormSchema>({
    mode: "onBlur",
    resolver: zodResolver(schema),
    defaultValues: {
      name: product?.name || "",
      description: product?.description || "",
      category: product?.category || "",
      salesPrice: product?.salesPrice || "",
      ...(state?.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="mt-6 flex w-full flex-col">
      <form
        ref={formRef}
        id="settings"
        onSubmit={handleFormSubmit}
        className="mt-3 flex w-full flex-col gap-5 "
      >
        <RegisterInput htmlFor="name" title="Nome" error={errors.name}>
          <InputRoot>
            <InputControl id="name" {...register("name")} />
          </InputRoot>
        </RegisterInput>

        <RegisterInput
          htmlFor="description"
          title="Descrição"
          error={errors.description}
        >
          <InputRoot>
            <InputControl id="description" {...register("description")} />
          </InputRoot>
        </RegisterInput>

        <RegisterInput htmlFor="category" title="Categoria">
          <SelectOptions {...register("category")} />
        </RegisterInput>

        <RegisterInput
          htmlFor="salesPrice"
          title="Preço de venda"
          error={errors.salesPrice}
        >
          <InputRoot>
            <InputControl id="salesPrice" {...register("salesPrice")} />
          </InputRoot>
        </RegisterInput>

        <div>{state.message && <span>{state.message}</span>}</div>

        <div className="flex  items-center justify-start gap-2 pt-5">
          <Link href="/products">
            <Button title="Cancelar" type="button" variant="outline">
              Cancelar
            </Button>
          </Link>

          <Button type="submit" title="Salvar" variant="primary">
            Salvar
          </Button>
        </div>
      </form>
    </div>
  );
}
