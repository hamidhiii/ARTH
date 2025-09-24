import { MenuItems } from "@/constants/navbar";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // для плавного скролла

export default function Menu() {
  return (
    <ul className="flex flex-col items-center md:flex-row lg:gap-[28px] md:gap-[15px]">
      {MenuItems.map(({ label, path }) => (
        <li
          key={label}
          className="font-medium lg:text-lg md:text-md lg:leading-6 md:leading-4 text-[#374151] hover:text-black cursor-pointer"
        >
          {path.startsWith("#") ? (
            // 👉 если path начинается с # — используем react-scroll
            <ScrollLink
              to={path.replace("#", "")} // убираем #
              smooth={true}
              duration={600}
              offset={-80} // если есть фиксированный header
            >
              {label}
            </ScrollLink>
          ) : (
            // 👉 иначе обычный роутер
            <Link to={path}>{label}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
