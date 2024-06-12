import { LogOut } from "lucide-react";
import Button from "../Button";

export default function Profile() {
  return (
    <div className="grid grid-cols-profile  items-center gap-3">
      <img
        src="https://github.com/rodrigovellinho.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Rodrigo
        </span>
        <span className="text-sm font-semibold text-zinc-500">
          rodrigo.kloeckner@gmail.com
        </span>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
}
