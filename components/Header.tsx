import { Star } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between py-2 px-2 items-center">
      <header className="text-4xl font-bold ">
        Travelcy - a new way to convert currency
      </header>
      <div className="flex gap-2 px-4">
        <Star size={35} fill={"white"} />
        <Star size={35} />
        <Star size={35} />
        <Star size={35} />
        <Star size={35} />
      </div>
    </div>
  );
}
