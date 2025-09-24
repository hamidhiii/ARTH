import { ecoscan } from "@/constants/ecoscan";
import type { FC } from "react";

export const Stats: FC = () => {
  const { area, flightDuration, resolution, altitude, images } = ecoscan.stats;
  const box =
    "flex flex-col items-center bg-white rounded-md shadow p-4 gap-1";

  return (
    <div
      className="
        grid
        grid-cols-2         
        sm:grid-cols-2     
        md:grid-cols-3      
        lg:grid-cols-5      
        gap-4
        mb-6
      "
    >
      <div className={box}>
        <span className="text-xl font-semibold">{area} km²</span>
        <span className="text-gray-500 text-sm">Area Covered</span>
      </div>
      <div className={box}>
        <span className="text-xl font-semibold">{flightDuration}</span>
        <span className="text-gray-500 text-sm">Flight Duration</span>
      </div>
      <div className={box}>
        <span className="text-xl font-semibold">{resolution}</span>
        <span className="text-gray-500 text-sm">Resolution</span>
      </div>
      <div className={box}>
        <span className="text-xl font-semibold">{altitude} m</span>
        <span className="text-gray-500 text-sm">Altitude</span>
      </div>
      <div className={box}>
        <span className="text-xl font-semibold">{images}</span>
        <span className="text-gray-500 text-sm">Images Captured</span>
      </div>
    </div>
  );
};
