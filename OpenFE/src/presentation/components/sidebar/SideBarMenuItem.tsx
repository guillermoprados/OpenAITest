import type { MenuRoute } from '../../router/router';
import { NavLink } from 'react-router-dom';

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
          ? 'flex items-center justify-center rounded-md bg-gray-800 p-2 transition-colors'
          : 'flex items-center justify-center rounded-md p-2 transition-colors hover:bg-gray-700'
      }
    >
      <i className={`${menuRoute.icon} mr-4 text-2xl text-indigo-400`} />
      <div className="flex flex-grow flex-col">
        <span className="text-lg font-semibold text-white">
          {menuRoute.title}
        </span>
        <span className="text-sm text-gray-400">{menuRoute.description}</span>
      </div>
    </NavLink>
  );
};
