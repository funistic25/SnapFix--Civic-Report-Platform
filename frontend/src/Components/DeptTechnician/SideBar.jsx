

 import { BarChart2, FileText, Users, MessageSquare, Settings } from 'lucide-react';
 import { NavLink } from "react-router-dom";
 import { useState } from 'react';
export const SideBar = ( ) => {

    const [active, setActive] = useState("Dashboard Overview");


    const menuItems = [
      {
        name: "Dashboard Overview",
        icon: <BarChart2 />,
        path: "/DeptOverview",
      },
      {
        name: "My Department Report",
        icon: <FileText size={20} />,
        path: "/DeptReports",
      },
      { name: "My Technicians", 
        icon: <Users />, 
        path: "/DeptTechnicians" },
      {
        name: "Citizen Feedback",
        icon: <MessageSquare />,
        path: "/DeptCitizen",
      },
      { name: "Profile & Settings", 
        icon: <Settings />, 
        path: "/DeptProfile" },
    ];


    return (
        <div className="h-screen w-[17%] p-3  pt-5">
            <div className="flex space-x-2 items-center">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className='size-9' strokeLinejoin="round" class="lucide lucide-chart-area-icon lucide-chart-area"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/></svg> </div>
                <div>
                    <h1 className="text-gray-800 text-lg font-semibold">City Services</h1>
                    <p className="text-gray-400">Admin Dashboard</p>
                </div>
            </div>
            <div className="mt-14 flex-1 space-y-4">
                {menuItems.map((item) => (
                <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                        
                    `flex space-x-3 px-6 py-3 rounded-lg transition-colors ${
                        isActive ? "bg-blue-100 text-gray-800" : "text-gray-400 hover:bg-gray-100"
                    }`
                    }
                >
                    {item.icon}
                    <span>{item.name}</span>
                </NavLink>
                ))}
            </div>
        </div>
    )
}