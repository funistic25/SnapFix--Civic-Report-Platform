import { NavLink } from "react-router-dom";
import { Home, MapPin, Globe, User } from "lucide-react";

export const FooterNav = () => {
  const linkClass =
    "flex flex-col items-center text-xs transition-colors duration-200";

  return (
    <div className="fixed bottom-0 z-50 left-0 w-full flex justify-around items-center border-t py-3 bg-white">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? "text-blue-500" : "text-gray-400"}`
        }
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/userReportsPage"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? "text-blue-500" : "text-gray-400"}`
        }
      >
        <MapPin className="w-5 h-5" />
        <span>My Reports</span>
      </NavLink>

      <NavLink
        to="/explore"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? "text-blue-500" : "text-gray-400"}`
        }
      >
        <Globe className="w-5 h-5" />
        <span>Explore</span>
      </NavLink>

      <NavLink
        to="/profile" // (create this route later if needed)
        className={({ isActive }) =>
          `${linkClass} ${isActive ? "text-blue-500" : "text-gray-400"}`
        }
      >
        <User className="w-5 h-5" />
        <span>Profile</span>
      </NavLink>
    </div>
  );
};
