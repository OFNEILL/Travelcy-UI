"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Bezier from "../components/Bezier";
import Line from "@/components/Line";
import LineTo, { SteppedLineTo } from "react-lineto";
import Currency from "@/components/Currency";

export default function Home() {
  const fromRef = useRef(null);
  const [fromValue, setFromValue] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="lex flex-col items-start w-full">
        <Header />
        <div className="flex flex-col items-center w-full py-20">
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
            console.log(fromValue);
          }}
        >
          <div className="A">
            <input
              className="text-white bg-[#38393c] border-2 border-[#38393c] rounded-lg text-center p-2 focus:appearance-none focus:m-0 outline-none focus:border-[#818181]"
              type="number"
              onChange={(e) => {
                setFromValue(parseInt(e.target.value));
              }}
              placeholder="Enter starting amount"
              id="fromValue"
            />
          </div>
          <div className="ORIGIN"></div>
          <div className="flex flex-col gap-4">
            <Currency currency={"USD"} amount={fromValue} />
            <Currency currency={"EUR"} amount={fromValue} />
          </div>
        </form>
      </div>
    </main>
  );
}
