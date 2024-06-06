import { useEffect, useRef } from "react";
// export default function Bezier() {
//   const canvas = document.getElementById("convertCanvas");
//   const ctx = canvas.getContext("2d");
//   return <canvas id="convertCanvas" width="300" height="200"></canvas>;
// }
//

export default function Bezier(element: any) {
  useEffect(() => {
    const canvas = document.getElementById("fromValue") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (ctx !== null) {
      ctx?.beginPath();
      ctx.strokeStyle = "red";
      ctx?.moveTo(10, 100);
      ctx.bezierCurveTo(300, 50, 0, 0, 500, 100);
      ctx.stroke();
    }
  }, []);

  return null;
}
