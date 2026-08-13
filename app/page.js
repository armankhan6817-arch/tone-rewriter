"use client";

import { useState } from "react";

export default function Tonewriter() {
  const [text, setText] = useState("");
  const [tone, setTone] = useState("neutral");
  const [output, setOutput] = useState("");
  function handleRewrite(chosenTone) {
    setTone(chosenTone);
    setOutput(`${chosenTone}: ${text}`);
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-8 font-sans selection:bg-indigo-500/30">
      <div className="max-w-md w-full bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-8 flex flex-col gap-8 text-slate-200">
        {/* Text Input Section */}
        <div className="flex flex-col gap-3  ">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
            className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-slate-200 resize-none h-32 placeholder-slate-600 shadow-inner"
          />
          {/* mode Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => {
                  handleRewrite("formal");
                }}
                className={`w-14 h-14 flex items-center justify-center rounded-xl   transition-all active:scale-95  border border-slate-700 shadow-sm ${
                  tone === "formal" ? "bg-blue-500 text-white" : ""
                }`}
              >
                formal
              </button>
              <button
                onClick={() => handleRewrite("funny")}
                className={`w-14 h-14 flex items-center justify-center rounded-xl  hover:text-white transition-all active:scale-95   border border-slate-700 shadow-sm ${
                  tone === "funny" ? "bg-yellow-500 text-white" : ""
                }`}
              >
                funny
              </button>
              <button
                onClick={() => {
                  handleRewrite("gen-z");
                }}
                className={`w-14 h-14 flex items-center justify-center rounded-xl  hover:text-white transition-all active:scale-95  border border-slate-700 shadow-sm ${
                  tone === "gen-z" ? "bg-green-500 text-white" : ""
                }`}
              >
                gen-z
              </button>
              <button
                onClick={() => handleRewrite("neutral")}
                className={`w-14 h-14 flex items-center justify-center rounded-xl  hover:text-white transition-all active:scale-95 border border-slate-700 shadow-sm ${
                  tone === "neutral" ? "bg-gray-500 text-red-500" : ""
                }`}
              >
                neutral
              </button>
            </div>
          </div>

          <hr className="border-slate-800" />

          {/* Toggle Section */}
          <div className="flex flex-col">
            {output && (
              <p className="text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98] mt-4 p-4 bg-slate-800">
                {output}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
