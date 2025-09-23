import { ecoscan } from "@/constants/ecoscan";
import type { FC } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export const VegetationTrend: FC = () => (
  <div className="bg-white rounded-md shadow p-4">
    <h3 className="font-semibold mb-2">Vegetation Index Trend</h3>
    <div className="w-full h-48">
      <ResponsiveContainer>
        <LineChart data={ecoscan.vegetationTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="flight" />
          <YAxis domain={[0.6, 0.8]} />
          <Tooltip />
          <Line type="monotone" dataKey="index" stroke="#22c55e" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);
