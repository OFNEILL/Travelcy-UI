import { useEffect } from "react";
import LineTo from "react-lineto";

export default function Line(origin: any, destination: any) {
  // useEffect(() => {
  //   const start = document.getElementById(origin);
  //   const end = document.getElementById(destination);
  // }, []);

  return (
    <>
      <LineTo borderColor="red" from={origin} to={destination} />
    </>
  );
}
