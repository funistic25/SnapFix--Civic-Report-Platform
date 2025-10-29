

import { BarChart2, FileText, Users, MessageSquare, Settings, Mail, Star, Eye } from 'lucide-react';
export const RecentReports = () => {



    const mockReports = [
        {
            icon: "JS",
            Name: "John Smith",
            Id: "TECH-001",
            email: "Jonh@gmail.com",
            phoneNo: "91234",
            activeReportsNumber: "3",
            activeReport: "Active Reports",
            ReportResolve: "142 resolve",
            Rating: "4.2",
            checkIcon: "",
            settingIcon: "",
            Status: "InProgress"

        },
        {
            icon: "JS",
            Name: "John Smith",
            Id: "TECH-001",
            email: "Jonh@gmail.com",
            phoneNo: "91234",
            activeReportsNumber: "3",
            activeReport: "Active Reports",
            ReportResolve: "142 resolve",
            Rating: "4.2",
            checkIcon: "",
            settingIcon: "",
            Status: "Pending"

        },
        {
            icon: "JS",
            Name: "John Smith",
            Id: "TECH-001",
            email: "Jonh@gmail.com",
            phoneNo: "91234",
            activeReportsNumber: "3",
            activeReport: "Active Reports",
            ReportResolve: "142 resolve",
            Rating: "4.2",
            checkIcon: "",
            settingIcon: "",
            Status: "Pending"

        },
        {
            icon: "JS",
            Name: "John Smith",
            Id: "TECH-001",
            email: "Jonh@gmail.com",
            phoneNo: "91234",
            activeReportsNumber: "3",
            activeReport: "Active Reports",
            ReportResolve: "142 resolve",
            Rating: "4.2",
            checkIcon: "",
            settingIcon: "",
            Status: "Pending"

        },
        {
            icon: "JS",
            Name: "John Smith",
            Id: "TECH-001",
            email: "Jonh@gmail.com",
            phoneNo: "91234",
            activeReportsNumber: "3",
            activeReport: "Active Reports",
            ReportResolve: "142 resolve",
            Rating: "4.2",
            checkIcon: "",
            settingIcon: "",
            Status: "Pending"

        },
        {
            icon: "JS",
            Name: "John Smith",
            Id: "TECH-001",
            email: "Jonh@gmail.com",
            phoneNo: "91234",
            activeReportsNumber: "3",
            activeReport: "Active Reports",
            ReportResolve: "142 resolve",
            Rating: "4.2",
            checkIcon: "",
            settingIcon: "",
            Status: "Resolved"

        },
        {
            icon: "JS",
            Name: "John Smith",
            Id: "TECH-001",
            email: "Jonh@gmail.com",
            phoneNo: "91234",
            activeReportsNumber: "3",
            activeReport: "Active Reports",
            ReportResolve: "142 resolve",
            Rating: "4.2",
            checkIcon: "",
            settingIcon: "",
            Status: "Pending"

        },
    ]

    const statusAssign = {
        Pending: "bg-red-100 text-red-600",
        InProgress: "bg-yellow-100 text-yellow-600",
        Resolved: "bg-green-100 text-green-600"
    }

    return (
        <div className="pt-3 px-3 bg-white rounded-lg border border-2 border-gray-300">
            <div className="font-semibold pb-5 pt-3 pl-3 ">Team Overview</div>
            <div>
                <table className="text-sm text-left w-full ">
                    <thead className="unppercase border-b  border-gray-300">
                        <tr className="text-gray-400 text-sm  p-2">
                            <th className="px-4 py-3">Technician</th>
                            <th className="px-4 py-3">Contact</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Current Reports</th>
                            <th className="px-4 py-3">Performance</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {mockReports.map((report) => {
                            return(

                                <tr className="border-b  border-gray-300 text-gray-700  ">
                                    {/* <td className="px-4 py-3"><img src="" alt="" /></td> */}

                                    <td className="px-5 py-5 "><span className="block font-semibold">{report.Name}</span><span className="block">{report.Id}</span></td>

                                    <td className="px-5 py-5 "><span className="block flex items-center"><Mail  className='mr-1 size-3'/>{report.email}</span><span className="block">{report.phoneNo}</span></td>


                                    <td className="px-5 py-5"><span className={`px-2 py-1 rounded-full text-xs ${statusAssign[report.Status]}`}>{report.Status}</span></td>

                                    <td className="px-5 py-5 ">
                                        <span className={`px-2 py-1  text-xl block font-bold ml-6`}>{report.activeReportsNumber}</span>
                                        <span className={`px-2 py-1  text-xs block`}>{report.activeReport}</span>
                                        
                                    </td>
                                    <td className="py-5">
                                        <span className={`px-2 py-1  text-xs block font-semibold`}>{report.ReportResolve}</span>
                                        <span className={`px-2 py-1  text-xs block flex items-center`}><Star className='size-3 mr-2'/>{report.Rating}</span>
                                        
                                    </td>
                                    <td className="py-5 flex h-25   items-center">
                                        <span className={`px-2 py-1  text-xs block font-semibold `}><Settings className='size-5 mr-2'/></span>
                                        <span className={`px-2 py-1  text-xs block   `}><Eye className='size-5 mr-2'/></span>
                                        
                                    </td>


                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
