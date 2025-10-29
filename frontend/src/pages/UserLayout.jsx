import { Outlet } from "react-router-dom";
import { FooterNav } from "../Components/UserDashboards/Footer"; // the footer code you made

export const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer visible only on these pages */}
      <FooterNav />
    </div>
  );
};
