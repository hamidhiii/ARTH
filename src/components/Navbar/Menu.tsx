import { MenuItems } from "@/constants/navbar";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul className="flex flex-col items-center md:flex-row lg:gap-[28px] md:gap-[15px]">
      {MenuItems.map(({ label, path }) => (
        <li
          key={path}
          className="font-medium lg:text-lg md:text-md lg:leading-6 md:leading-4 text-[#374151] hover:text-black"
        >
          <Link to={path}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
