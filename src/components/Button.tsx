"use client";
import { useFormStatus } from "react-dom";
import { tv, VariantProps } from "tailwind-variants";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

const button = tv({
  base: [
    "rounded-lg px-4 py-2 text-sm font-semibold shadow-sm outline-none   ",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500",
    "active:opacity-80",
  ],
  variants: {
    variant: {
      primary: "bg-violet-600 text-white hover:bg-violet-700",
      outline: "border border-zinc-300 text-zinc-700 hover:bg-zinc-50",
      ghost: "rounded-md px-2 hover:bg-zinc-50 shadow-none",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export default function Button({
  children,
  variant,
  type,
  ...props
}: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      className={button({ variant: variant })}
      disabled={pending}
      {...props}
    >
      {children}
    </button>
  );
}
