import Link from "next/link";
import { prisma } from "../db/db";
import Table from "@/components/Table";
import Button from "@/components/Button";

export default async function Products() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      description: true,
      salesPrice: true,
    },
  });

  const headerColumns = [
    "Nome",
    "Categoria",
    "Descrição",
    "Preço de Venda",
    "Ações",
  ];

  const tableColumns = ["name", "category", "description", "salesPrice"];

  return (
    <>
      <div className="mt-6 flex flex-row items-center justify-between  pr-4">
        <span className="text-3xl font-medium text-zinc-900">
          Lista de Produtos
        </span>
        <Link href="/products/register_product">
          <Button title="Cadastrar Produto" variant="primary">
            Cadastrar Produto
          </Button>
        </Link>
      </div>
      <div className="mt-8">
        <Table
          headerColumns={headerColumns}
          entries={products}
          tableColumns={tableColumns}
        />
      </div>
    </>
  );
}
