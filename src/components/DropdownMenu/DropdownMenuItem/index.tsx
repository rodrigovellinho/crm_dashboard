import { ReactNode } from "react";

interface DropdownMenuItemProps {
  handleClick?: () => void;
  children?: ReactNode;
}

export default function DropdownMenuItem({
  handleClick,
  children,
}: DropdownMenuItemProps) {
  return (
    <li
      className="hover:cursor-pointer hover:bg-gray-100"
      onClick={() => handleClick?.()}
    >
      {children}
    </li>
  );
}
