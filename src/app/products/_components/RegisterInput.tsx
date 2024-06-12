import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface RegisterInput {
  children: ReactNode;
  htmlFor: string;
  title: string;
  error?: FieldError;
}

export default function RegisterInput({
  children,
  htmlFor,
  title,
  error,
}: RegisterInput) {
  return (
    <div className="flex-col">
      <label
        htmlFor={htmlFor}
        className="pl-1 text-sm font-medium text-zinc-700"
      >
        {title}
      </label>
      <div>{children}</div>
      <span className="px-2 text-sm text-red-500">{error?.message}</span>
    </div>
  );
}
