import { useState } from "react";
import { SteppedLineTo } from "react-lineto";

type CurrencyProps = {
  currency: string;
  amount: number;
  chosen: string;
  setChosen: any;
  Convert: Function;
};

export default function Currency(props: CurrencyProps) {
  //methond that hits BE, passing currency and amount
  return (
    <div>
      <button
        className={`${props.currency} select-none cursor-pointer text-[#818181] plasmo-text-xl flex justify-center px-4 py-4 bg-[#38393c] rounded-lg`}
        type="button"
        onClick={() =>
          {props.chosen !== props.currency
            ? props.setChosen(props.currency)
            : props.setChosen(""); props.Convert();}
        }
      >
        {props.currency}
      </button>

      <SteppedLineTo
        borderColor={`${props.currency === props.chosen ? "white" : "#818181"} `}
        from="fromValue"
        fromAnchor="right"
        to={props.currency}
        toAnchor="left"
        delay={true}
        zIndex={props.chosen === props.currency ? 100 : 1}
        orientation="h"
        borderWidth={props.chosen === props.currency ? 2 : 1}
      />
      <SteppedLineTo
        borderColor={`${props.currency === props.chosen ? "white" : "#818181"} `}
        from={props.currency}
        fromAnchor="right"
        to="toValue"
        toAnchor="left"
        delay={true}
        zIndex={props.chosen === props.currency ? 100 : 1}
        orientation="h"
        borderWidth={props.chosen === props.currency ? 2 : 1}
      />
    </div>
  );
}
