"use client";

import { useState } from "react";

export default function Tonewriter() {
  const [text, setText] = useState("");
  const [tone, setTone] = useState("");
  const [output, setOutput] = useState("");

  function handleRewrite(chosenTone) {
    setTone(chosenTone);
    setOutput(`${chosenTone}: ${text}`);
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-8 font-sans selection:bg-indigo-500/30">
      <div className="max-w-md w-full bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 p-8 flex flex-col gap-8 text-slate-200">
        <h1 className="text-3xl font-bold text-center">Tonewriter</h1>
        <textarea
          className="bg-slate-800 text-slate-200 placeholder:text-slate-500 border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p className="text-slate-400 text-sm">{text.length} characters</p>

        {/* buttons are here  */}

        <div className="flex flex-wrap  gap-1">
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ${tone === "casual" ? "bg-green-500" : ""}`}
            onClick={() => handleRewrite("casual")}
          >
            Casual
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ${tone === "formal" ? "bg-green-500" : ""}`}
            onClick={() => handleRewrite("formal")}
          >
            Formal
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ${tone === "funny" ? "bg-green-500" : ""}`}
            onClick={() => handleRewrite("funny")}
          >
            Funny
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ${tone === "professional" ? "bg-green-500" : ""}`}
            onClick={() => handleRewrite("professional")}
          >
            Professional
          </button>
        </div>
        <div>

          {output &&
            <p className="text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98] mt-4 p-4 bg-slate-800">
              {output}
            </p>
          }
        </div>
      </div>
    </main>
  );
}
