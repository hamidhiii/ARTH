import type { FC } from "react";
import div from '@/assets/EcoScanLending/div (1).png'

export const OrthoImagery: FC = () => (
  <div className="bg-white rounded-md shadow p-2">
    <h3 className="font-semibold text-sm mb-1">Orthomosaic Imagery</h3>
    <div className="h-32 bg-gray-200 rounded">
        <img src={div} alt=""  className="object-cover"/>
    </div>
  </div>
);
