"use client";

import DropdownMenu from "@/components/DropdownMenu";
import { TableBodyType } from "@/types/table";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface TableBodyProps {
  columns: Array<string>;
  entries: Array<TableBodyType>;
}

export default function TableBody({ columns, entries }: TableBodyProps) {
  const [parent] = useAutoAnimate();
  return (
    <tbody>
      {entries.map((entry) => (
        <tr key={entry.name} ref={parent}>
          {columns.map((column) => {
            return (
              <td key={column} className="py-1">
                {entry[column as keyof TableBodyType]}
              </td>
            );
          })}
          <td className="relative">
            <DropdownMenu productId={entry.id} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
