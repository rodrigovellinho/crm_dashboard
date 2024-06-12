import PageHeader from "../../_components/PageHeader";
import FormProduct from "../../_components/Form";
import { prisma } from "@/app/db/db";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const productId = Number(id);
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  return (
    <>
      <PageHeader title="Editar Produto" />
      <FormProduct product={product} />
    </>
  );
}
