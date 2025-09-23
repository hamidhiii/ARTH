import type { FC } from "react";

export const Header: FC = () => (
  <header className="flex justify-between items-center mb-6">
    <div>
      <h1 className="text-xl font-semibold">EcoScan Data Dashboard</h1>
      <p className="text-sm text-gray-500">
        Data Uploaded • Last updated: 2 minutes ago
      </p>
    </div>
    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
      + Start New Flight
    </button>
  </header>
);
