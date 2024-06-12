import { TableBodyType } from "@/types/table";
import TableBody from "./Body";
import TableHeader from "./Header";

interface TableProps {
  tableColumns: Array<string>;
  headerColumns: Array<string>;
  entries: Array<TableBodyType>;
}

export default function Table({
  headerColumns,
  entries,
  tableColumns,
}: TableProps) {
  return (
    <table className="mt-6 w-full text-left">
      <TableHeader headerColumns={headerColumns} />
      <TableBody entries={entries} columns={tableColumns} />
    </table>
  );
}
