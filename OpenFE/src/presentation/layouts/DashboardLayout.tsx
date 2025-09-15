import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <>
      <h1>Dasboard</h1>
      <Outlet />
    </>
  );
};
