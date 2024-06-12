interface PageHeader {
  title: string;
}

export default function PageHeader({ title }: PageHeader) {
  return <h1 className="text-3xl font-medium text-zinc-900">{title}</h1>;
}
