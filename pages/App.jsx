import { useState } from "react";

const dummyData = {
  borradores: 1,
  enProgreso: 3,
  participo: 2,
  aprobado: 4,
  rechazado: 1,
  retirado: 0,
};

export default function App() {
  const [tab, setTab] = useState("inicio");

  return (
    <div className="flex h-screen">
      <Sidebar data={dummyData} setTab={setTab} />
      <div className="flex-1 p-4 overflow-y-auto">
        {tab === "inicio" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Bienvenido a la Intranet</h1>
            <p>Selecciona una opción del menú para comenzar.</p>
          </div>
        )}
        {tab === "solicitud" && (
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Solicitud de Horas Extras</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Fecha</label>
                <input type="date" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Horas</label>
                <input type="number" className="w-full border rounded px-3 py-2" min="1" max="8" />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Enviar Solicitud</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function Sidebar({ data, setTab }) {
  return (
    <div className="w-64 bg-gray-100 p-4 space-y-6">
      <h2 className="text-xl font-bold text-blue-800">SERLOG</h2>
      <div>
        <h3 className="text-sm font-semibold mb-1">Mis tareas</h3>
        <SidebarItem label="Aprobaciones" count={1} />
        <SidebarItem label="Solicitudes de entrada" count={66} />
        <SidebarItem label="Aclaraciones" count={14} />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-1">Mis elementos</h3>
        {Object.entries(data).map(([key, count]) => (
          <SidebarItem key={key} label={key} count={count} />
        ))}
        <button
          className="mt-4 bg-green-600 text-white px-3 py-2 rounded w-full"
          onClick={() => setTab("solicitud")}
        >
          Nueva Solicitud
        </button>
      </div>
    </div>
  );
}

function SidebarItem({ label, count }) {
  return (
    <div className="flex justify-between items-center py-1 text-sm">
      <span>{label}</span>
      <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded">{count}</span>
    </div>
  );
}
