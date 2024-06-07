import { useEffect } from "react";

export default function Line(origin: any, destination: any) {
  // useEffect(() => {
  //   const start = document.getElementById(origin);
  //   const end = document.getElementById(destination);
  // }, []);

  const x = origin.position();
  const y = origin.position();

  return (
    <svg>
      <line id="line123" />
    </svg>
  );
}
