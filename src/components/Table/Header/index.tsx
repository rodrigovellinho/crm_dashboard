interface TableHeaderProps {
  headerColumns: Array<string>;
}

export default function TableHeader({ headerColumns }: TableHeaderProps) {
  return (
    <thead className="border-b border-black">
      <tr>
        {headerColumns.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
      </tr>
    </thead>
  );
}
