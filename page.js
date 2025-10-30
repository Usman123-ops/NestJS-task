"use client";

import React, { useState } from "react";

export default function Page() {
  const [value, setValue] = useState(0);

  // single function using parameter + let + limit conditions
  function handleClick(actionType) {
    let action = actionType;

    if (action === "add") {
      if (value < 10) {
        setValue(value + 1);
        console.log("Added 1");
      } else {
        console.log("❌ Maximum limit reached (10)");
        alert("Maximum limit is 10!");
      }
    } 
    else if (action === "subtract") {
      if (value > 0) {
        setValue(value - 1);
        console.log("Subtracted 1");
      } else {
        console.log("❌ Minimum limit reached (0)");
        alert("Minimum limit is 0!");
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-sm text-center">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-8">
          Counter Program
        </h1>

        <div className="text-[80px] font-bold text-gray-900 mb-10">
          {value}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={() => handleClick("add")}
            className="bg-blue-500 text-white text-lg px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 active:scale-95 transition"
          >
            ➕ Add
          </button>

          <button
            onClick={() => handleClick("subtract")}
            className="bg-red-500 text-white text-lg px-8 py-3 rounded-xl font-semibold hover:bg-red-600 active:scale-95 transition"
          >
            ➖ Subtract
          </button>
        </div>

        <p className="mt-8 text-gray-600 text-lg">
          🔢 Range: 0 to 10 only
        </p>
      </div>
   </div>
   );
}