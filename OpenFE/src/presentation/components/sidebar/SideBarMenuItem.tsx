import type { MenuRoute } from "../../router/router";
import { NavLink } from "react-router-dom";

interface Props {
  menuRoute: MenuRoute;
}
export const SideBarMenuItem = ({ menuRoute }: Props) => {
  return (
    <NavLink
      key={menuRoute.to}
      to={menuRoute.to}
      className={({ isActive }) =>
        isActive
          ? "flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors"
          : "flex justify-center items-center hover:bg-gray-700 rounded-md p-2 transition-colors"
      }
    >
      <i className={`${menuRoute.icon} text-2xl mr-4 text-indigo-400`} />
      <div className="flex flex-col flex-grow">
        <span className="text-white text-lg font-semibold">
          {menuRoute.title}
        </span>
        <span className="text-gray-400 text-sm">{menuRoute.description}</span>
      </div>
    </NavLink>
  );
};
