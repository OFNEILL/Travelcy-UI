"use client";

import { useEffect, useRef } from "react";

import Header from "../components/Header";
import Bezier from "../components/Bezier";

export default function Home() {
  const fromRef = useRef(null);
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
        <form className="flex items-start flex-row">
          <input type="number" placeholder="Enter starting amount" />
          <canvas
            width="200"
            height="300"
            id="fromValue"
            ref={fromRef}
          ></canvas>
          <Bezier element="fromValue" />
        </form>
      </div>
    </main>
  );
}
