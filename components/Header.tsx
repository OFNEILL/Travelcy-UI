import { Star } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [rating, setRating] = useState(0);

  function handleRating(star: number) {
    if (star > rating) {
      setRating(star);
    }
  }

  return (
    <div className="flex justify-between py-2 px-2 items-center">
      <header className="text-4xl font-bold ">
        Travelcy - a new way to convert currency
      </header>
      <div className="flex gap-2 px-4">
        <Star
          size={35}
          fill={rating > 0 ? "white" : ""}
          onClick={() => {
            handleRating(1);
          }}
        />
        <Star
          size={35}
          fill={rating > 1 ? "white" : ""}
          onClick={() => {
            handleRating(2);
          }}
        />
        <Star
          size={35}
          fill={rating > 2 ? "white" : ""}
          onClick={() => {
            handleRating(3);
          }}
        />
        <Star
          size={35}
          fill={rating > 3 ? "white" : ""}
          onClick={() => {
            handleRating(4);
          }}
        />
        <Star
          size={35}
          fill={rating > 4 ? "white" : ""}
          onClick={() => {
            handleRating(5);
          }}
        />
      </div>
    </div>
  );
}
