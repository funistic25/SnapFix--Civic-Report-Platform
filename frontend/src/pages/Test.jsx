import React from "react";

const reports = [
  {
    icon: "M2.25 10.5h15c1.24 0 2.25-1.01 2.25-2.25V6.5a2.25 2.25 0 00-2.25-2.25H2.25A2.25 2.25 0 000 6.5v1.75c0 1.24 1.01 2.25 2.25 2.25zm0-2.25a.75.75 0 000 1.5h15a.75.75 0 000-1.5H2.25z",
    title: "Broken Water Pipe",
    category: "Water & Plumbing",
    address: "123 Main Street, Downtown",
    date: "Jan 15, 2024",
    upvotes: 12,
    status: "In Progress",
    statusColor: "bg-yellow-500",
  },
  {
    icon: "M14.586 4.673a2.25 2.25 0 013.182 0l3.818 3.818a2.25 2.25 0 010 3.182l-7.79 7.79a2.25 2.25 0 01-3.182 0l-3.818-3.818a2.25 2.25 0 010-3.182l7.79-7.79zM12 9.75a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5H12z",
    title: "Pothole on Oak Avenue",
    category: "Roads & Paving",
    address: "456 Oak Avenue, Midtown",
    date: "Jan 14, 2024",
    upvotes: 8,
    status: "Pending",
    statusColor: "bg-red-500",
  },
  {
    icon: "M11.25 4.5a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3zM21 12a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h3a.75.75 0 01.75.75zM4.5 12a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h3a.75.75 0 01.75.75zM12 21a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3A.75.75 0 0012 21z",
    title: "Broken Street Light",
    category: "Street Lighting",
    address: "789 Pine Street, Uptown",
    date: "Jan 11, 2024",
    upvotes: 15,
    status: "Resolved",
    statusColor: "bg-green-500",
  },
];

const Test = () => {
  const [activeNav, setActiveNav] = React.useState("reports");

  const navItems = [
    {
      name: "Home",
      icon: "M10 20a10 10 0 100-20 10 10 0 000 20z",
      active: false,
    },
    {
      name: "My Reports",
      icon: "M10 20a10 10 0 100-20 10 10 0 000 20z",
      active: true,
    },
    {
      name: "Explore",
      icon: "M10 20a10 10 0 100-20 10 10 0 000 20z",
      active: false,
    },
    {
      name: "Profile",
      icon: "M10 20a10 10 0 100-20 10 10 0 000 20z",
      active: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans mx-auto max-w-md">
      {/* Header */}
      <header className="bg-white p-4 flex items-center justify-between shadow-md">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            My Reports
          </h1>
          <p className="text-sm text-gray-500">3 reports submitted</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 md:w-5 md:h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="font-semibold text-sm">Report New Issue</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-3 space-y-3 overflow-y-auto pb-20">
        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 flex items-start space-x-3 border-l-4 border-transparent hover:border-blue-500 transition-all cursor-pointer"
          >
            {/* Icon section */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex items-center justify-center text-blue-500">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* The icon paths here are simplified for demonstration. In a real app, you'd use a library like Heroicons. */}
                  <path d={report.icon} />
                </svg>
              </div>
            </div>

            {/* Main content section */}
            <div className="flex-1 flex flex-col space-y-0.5">
              <h3 className="text-base md:text-lg font-semibold text-gray-800">
                {report.title}
              </h3>
              
              <div className="flex items-center space-x-1 text-gray-500 text-xs md:text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3 md:w-4 md:h-4 text-red-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.697 18.552a.75.75 0 00.606 0c.269-.17.52-.36.756-.569a1.442 1.442 0 011.056-.474c.247 0 .493.064.717.184l.758.397a.75.75 0 00.724-1.385l-.758-.397a2.942 2.942 0 00-1.32-.416 2.942 2.942 0 00-1.32.416l-.758.397a.75.75 0 00.724 1.385z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16A8 8 0 0010 2zm.75 4a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{report.address}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500 text-xs md:text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3 md:w-4 md:h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.5 2a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-10zM5.5 4h10v1H5.5V4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 8a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V8zm-1.5 0a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5V8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{report.date}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500 text-xs md:text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3 md:w-4 md:h-4 text-blue-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-3a.5.5 0 010-1h3a.5.5 0 010 1h-3zm1.5-5.5a.5.5 0 01-.5-.5V6a.5.5 0 011 0v3a.5.5 0 01-.5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{report.upvotes} upvotes</span>
              </div>
            </div>

            {/* Status and Arrow section */}
            <div className="flex-shrink-0 flex items-center space-x-1">
              <span
                className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${report.statusColor}`}
              >
                {report.status}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        ))}
      </main>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white p-3 flex items-center justify-around border-t-2 border-gray-200 shadow-inner">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`flex flex-col items-center space-y-1 p-2.5 rounded-xl transition-colors ${
              item.name === activeNav
                ? "text-blue-500 font-bold"
                : "text-gray-500 hover:text-blue-500"
            }`}
            onClick={() =>
              setActiveNav(item.name.toLowerCase().replace(" ", "-"))
            }
          >
            {/* The SVG icons are placeholders. In a real app, you'd use a library or better SVGs. */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.25-8.25m0 0l8.25 8.25m-8.25-8.25v12.75"
              />
            </svg>
            <span className="text-xs">{item.name}</span>
          </button>
        ))}
      </footer>
    </div>
  );
};

export default Test;
