"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Currency from "@/components/Currency";

type ConvertProps = {
  currency: string;
  amount: number;
};

export default function Home() {
  const startRef = useRef(null);
  const endRef = useRef(null);
  const [fromValue, setFromValue] = useState(0);
  const [chosen, setChosen] = useState("");
  const [toValue, setToValue] = useState(0);

  function Convert() {
    setToValue(fromValue * 2);
    console.log(toValue);
  }

  useEffect(() => {
    window.addEventListener("resize", (e: any) => {
      window.location.reload();
    });
  });

  return (
    <main className="flex py-5 min-h-screen flex-col items-center">
      <div className="lex flex-col items-start w-full">
        <Header />
        <div className="flex flex-col items-center w-full py-10">
          <h1 className="text-4xl font-bold py-6">Welcome to Travelcy</h1>
          <p className="text-lg font-semibold py-6">
            A new way to convert currency
          </p>
        </div>
      </div>
      <div className="flex items-start align-start">
        <form
          className="gap-40 flex flex-row items-center"
          onSubmit={() => {
            Convert();
            console.log(toValue);
          }}
        >
          <input
            className="fromValue text-white bg-[#38393c] border-2 border-[#38393c] rounded-lg text-center p-2 focus:appearance-none focus:m-0 outline-none focus:border-[#818181]"
            type="number"
            onChange={(e) => {
              setFromValue(parseInt(e.target.value));
            }}
            onClick={() => {
              setFromValue(0);
              setToValue(0);
              setChosen("");
            }}
            placeholder="Enter starting amount"
            id="fromValue"
            ref={startRef}
          />
          <div className="flex flex-col gap-4">
            <Currency
              currency={"USD"}
              amount={fromValue}
              chosen={chosen}
              setChosen={setChosen}
              Convert={Convert}
            />
            <Currency
              currency={"EUR"}
              amount={fromValue}
              chosen={chosen}
              setChosen={setChosen}
              Convert={Convert}
            />
            <Currency
              currency={"AUS"}
              amount={fromValue}
              chosen={chosen}
              setChosen={setChosen}
              Convert={Convert}
            />
            <Currency
              currency={"EGP"}
              amount={fromValue}
              chosen={chosen}
              setChosen={setChosen}
              Convert={Convert}
            />
          </div>
          <input
            className="toValue bg-[#38393c] border-2 border-[#38393c] rounded-lg text-center p-2 focus:appearance-none focus:m-0 outline-none focus:border-[#818181]"
            type="number"
            disabled={true}
            value={`${toValue === 0 ? null : toValue}`}
            placeholder="...."
            id="fromValue"
            ref={endRef}
          />
        </form>
      </div>
    </main>
  );
}
