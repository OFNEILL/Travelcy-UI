import { useState } from "react";
import { SteppedLineTo } from "react-lineto";

type CurrencyProps = {
  currency: string;
  amount: number;
};

export default function Currency(props: CurrencyProps) {
  //methond that hits BE, passing currency and amount
  const [clicked, setCLicked] = useState(false);
  return (
    <div>
      <span
        className={`${props.currency} select-none cursor-pointer text-[#818181] plasmo-text-xl flex justify-center px-4 py-4 bg-[#38393c] rounded-lg`}
        onClick={() => setCLicked(!clicked)}
      >
        {props.currency}
      </span>

      <SteppedLineTo
        borderColor={`${clicked ? "white" : "#818181"} `}
        from="A"
        fromAnchor="right"
        to={props.currency}
        toAnchor="left"
        delay={true}
        orientation="h"
      />
    </div>
  );
}
