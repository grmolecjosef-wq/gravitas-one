export default function Dashboard() {
  const properties = [
    { name: "Byt 3+1, Praha 6 – Dejvice", address: "Wuchterlova 14", price: "4 850 000 Kč", status: "Aktivní" },
    { name: "Rodinný dům, Brno", address: "Vinohradská 5", price: "7 200 000 Kč", status: "Rezervace" },
    { name: "Byt 2+kk, Olomouc", address: "Horní náměstí 3", price: "2 490 000 Kč", status: "Aktivní" },
  ];

  const metrics = [
    { label: "Aktivní listingy", value: "24" },
    { label: "Klienti", value: "38" },
    { label: "Čistý cashflow / měs.", value: "+14 300 Kč" },
    { label: "Uzavřené obchody", value: "6" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">Gravitas One</h1>
          <p className="text-sm text-slate-500">Realitní operační systém · beta</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white rounded-xl border border-slate-200 p-4">
              <div className="text-xs text-slate-500 mb-1">{m.label}</div>
              <div className="text-xl font-semibold text-slate-900">{m.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="text-sm font-medium text-slate-900 mb-4">Poslední nemovitosti</h2>
          <div className="divide-y divide-slate-100">
            {properties.map((p) => (
              <div key={p.name} className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm font-medium text-slate-900">{p.name}</div>
                  <div className="text-xs text-slate-400">{p.address}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-slate-900">{p.price}</div>
                  <div className="text-xs text-blue-600">{p.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}