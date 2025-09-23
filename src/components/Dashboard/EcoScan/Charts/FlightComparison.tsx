import { ecoscan } from "@/constants/ecoscan";
import type { FC } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export const FlightComparison: FC = () => (
  <div className="bg-white rounded-md shadow p-4">
    <h3 className="font-semibold mb-2">Flight Comparison</h3>
    <div className="w-full h-48">
      <ResponsiveContainer>
        <BarChart data={ecoscan.flightComparison}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="flight3" fill="#60a5fa" name="Flight 3" />
          <Bar dataKey="current" fill="#22c55e" name="Current" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);
