"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Currency from "@/components/Currency";
import { HandleConversion } from "@/services/handleConversion";
import dynamic from "next/dynamic";

type ConvertProps = {
  currency: string;
  amount: number;
};

const CurrencyItem = dynamic(() => import("@/components/Currency"), {
  ssr: false,
});

export default function Home() {
  const startRef = useRef(null);
  const endRef = useRef(null);
  const [fromValue, setFromValue] = useState(0);
  const [chosen, setChosen] = useState("");
  const [toValue, setToValue] = useState(0);
  const [screenSize, setScreenSize] = useState(0);

  function Convert() {
    HandleConversion(fromValue, chosen).then((res) => {
      setToValue(res.convertedAmount);
    });
    console.log(toValue);
  }

  useEffect(() => {
    if (chosen !== "") {
      Convert();
    }
  }, [chosen]);

  useEffect(() => {
    // Only run this effect on the client
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenSize(window.innerWidth);
        // window.location.reload();
      };

      window.addEventListener("resize", handleResize);

      // Set initial screen size
      setScreenSize(window.innerWidth);

      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

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
        <form className="gap-40 flex items-center sm:flex-row flex-col">
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
          <div className="flex flex-row sm:flex-col gap-4">
            <CurrencyItem
              currency={"USD"}
              amount={fromValue}
              chosen={chosen}
              setChosen={setChosen}
              screenSize={screenSize}
            />
            <CurrencyItem
              currency={"EUR"}
              amount={fromValue}
              chosen={chosen}
              setChosen={setChosen}
              screenSize={screenSize}
            />
            <CurrencyItem
              currency={"BRL"}
              amount={fromValue}
              chosen={chosen}
              setChosen={setChosen}
              screenSize={screenSize}
            />
            <CurrencyItem
              currency={"JPY"}
              amount={fromValue}
              chosen={chosen}
              setChosen={setChosen}
              screenSize={screenSize}
            />
            <CurrencyItem
              currency={"TRY"}
              amount={fromValue}
              chosen={chosen}
              setChosen={setChosen}
              screenSize={screenSize}
            />
          </div>
          <input
            className="toValue bg-[#38393c] border-2 border-[#38393c] rounded-lg text-center p-2 focus:appearance-none focus:m-0 outline-none focus:border-[#818181]"
            type="number"
            disabled={true}
            value={`${toValue === 0 ? "" : toValue}`}
            placeholder="...."
            id="fromValue"
            ref={endRef}
          />
        </form>
      </div>
    </main>
  );
}
