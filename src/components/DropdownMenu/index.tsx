"use client";

import { deleteProduct } from "@/app/products/_actions/products";
import { useDropdown } from "@/hooks/useDropdown";
import { useRouter } from "next/navigation";
import DropdownMenuItem from "./DropdownMenuItem";
import Link from "next/link";

interface TableBodyProps {
  productId: number;
}

export default function DropdownMenu({ productId }: TableBodyProps) {
  const { isOpen, ref, setIsOpen } = useDropdown();
  const router = useRouter();

  const handleRemoveProduct = async (id: number) => {
    deleteProduct(id);
    router.refresh();
  };

  return (
    <>
      <div ref={ref}>
        <button
          className="hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ...
        </button>

        {isOpen && (
          <div className="absolute left-0 top-6 z-50 w-4/5 rounded-sm border border-zinc-300 bg-white p-1 text-xs">
            <ul>
              <DropdownMenuItem>
                <Link href={`/products/edit_product/${productId}`}>Editar</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                handleClick={() => handleRemoveProduct(productId)}
              >
                <span>Excluir</span>
              </DropdownMenuItem>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
