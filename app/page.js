"use client";

import { useState } from "react";

export default function Tonewriter() {
  const [text, setText] = useState("");
  const [tone, setTone] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRewrite(chosenTone) {
    setTone(chosenTone);
    setLoading(true);
    if (text.trim() === "") {
      setOutput("Please enter some text to rewrite.");
      setLoading(false);
      return;
    }
    const res = await fetch("/api/rewrite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text, tone: chosenTone }),
    });
    const data = await res.json();
    setOutput(` ${data.output}`);
    setLoading(false);
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
            disabled={loading}
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ${tone === "casual" ? "bg-green-500" : ""}  disabled:opacity-50 disabled:cursor-not-allowed `}
            onClick={() => handleRewrite("casual")}
          >
            Casual
          </button>
          <button
            disabled={loading}
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ${tone === "formal" ? "bg-green-500" : ""} disabled:opacity-50 disabled:cursor-not-allowed `}
            onClick={() => handleRewrite("formal")}
          >
            Formal
          </button>
          <button
            disabled={loading}
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ${tone === "funny" ? "bg-green-500" : ""}  disabled:opacity-50 disabled:cursor-not-allowed `}
            onClick={() => handleRewrite("funny")}
          >
            Funny
          </button>
          <button
            disabled={loading}
            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ${tone === "professional" ? "bg-green-500" : ""}  disabled:opacity-50 disabled:cursor-not-allowed `}
            onClick={() => handleRewrite("professional")}
          >
            Professional
          </button>
        </div>
        <div>
          {loading ? (
            <p className="text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98] mt-4 p-4 bg-slate-800">
              Loading...
            </p>
          ) : output ? (
            <p className="text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98] mt-4 p-4 bg-slate-800">
              {output}
            </p>
          ) : (
            <p className="text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98] mt-4 p-4 bg-slate-800">
              Please enter text and select a tone to rewrite.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
