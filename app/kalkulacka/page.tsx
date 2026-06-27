"use client";

import { useState } from "react";

export default function Kalkulacka() {
  const [cena, setCena] = useState(4000000);
  const [kapitalPct, setKapitalPct] = useState(30);
  const [urokPct, setUrokPct] = useState(5.5);
  const [najem, setNajem] = useState(18000);
  const [nakladyPct, setNakladyPct] = useState(15);

  const vlastniKapital = cena * (kapitalPct / 100);
  const uver = cena - vlastniKapital;
  const mesicniUrok = urokPct / 100 / 12;
  const pocetSplatek = 30 * 12;
  const splatka =
    uver > 0
      ? (uver * (mesicniUrok * Math.pow(1 + mesicniUrok, pocetSplatek))) /
        (Math.pow(1 + mesicniUrok, pocetSplatek) - 1)
      : 0;
  const cistyNajem = najem * (1 - nakladyPct / 100);
  const cashflow = cistyNajem - splatka;
  const rocniVynos = ((cistyNajem * 12) / cena) * 100;

  const fmt = (n: number) => Math.round(n).toLocaleString("cs-CZ") + " Kč";

  return (
    <main className="p-8">
      <div className="max-w-3xl mx-auto">
      <div className="mb-8">
  <h1 className="text-xl font-semibold text-slate-900">Investiční kalkulačka</h1>
</div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
          <div className="mb-5">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Cena nemovitosti</span>
              <span className="font-medium text-slate-900">{fmt(cena)}</span>
            </div>
            <input type="range" min={500000} max={20000000} step={100000} value={cena}
              onChange={(e) => setCena(Number(e.target.value))} className="w-full" />
          </div>

          <div className="mb-5">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Vlastní kapitál</span>
              <span className="font-medium text-slate-900">{kapitalPct} %</span>
            </div>
            <input type="range" min={10} max={100} step={5} value={kapitalPct}
              onChange={(e) => setKapitalPct(Number(e.target.value))} className="w-full" />
          </div>

          <div className="mb-5">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Úroková sazba</span>
              <span className="font-medium text-slate-900">{urokPct.toFixed(1)} %</span>
            </div>
            <input type="range" min={1} max={12} step={0.1} value={urokPct}
              onChange={(e) => setUrokPct(Number(e.target.value))} className="w-full" />
          </div>

          <div className="mb-5">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Měsíční nájem</span>
              <span className="font-medium text-slate-900">{fmt(najem)}</span>
            </div>
            <input type="range" min={5000} max={60000} step={500} value={najem}
              onChange={(e) => setNajem(Number(e.target.value))} className="w-full" />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-600">Roční náklady</span>
              <span className="font-medium text-slate-900">{nakladyPct} %</span>
            </div>
            <input type="range" min={1} max={30} step={1} value={nakladyPct}
              onChange={(e) => setNakladyPct(Number(e.target.value))} className="w-full" />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <h2 className="text-sm font-medium text-slate-900 mb-4">Výsledky</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xs text-slate-500 mb-1">Roční výnos</div>
              <div className="text-lg font-semibold text-green-700">{rocniVynos.toFixed(2)} %</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-1">Cashflow / měs.</div>
              <div className={`text-lg font-semibold ${cashflow >= 0 ? "text-blue-700" : "text-red-700"}`}>
                {cashflow >= 0 ? "+" : ""}{fmt(cashflow)}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-1">Splátka / měs.</div>
              <div className="text-lg font-semibold text-slate-900">{fmt(splatka)}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}