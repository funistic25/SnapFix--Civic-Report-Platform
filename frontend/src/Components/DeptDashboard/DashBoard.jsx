
import { Heading } from "../DeptTechnician/Heading"
import { Filter } from "./Filter"
import {RecentReports} from "../DeptTechnician/RecentReports"

export const DashBoard = () =>{
    return (
        <div className="bg-gray-50 w-full p-16 space-y-4">
            <Heading label_1="Department Overview " label_2="Monitor your department's performance and recent activity"></Heading>
            <Filter></Filter>
            <RecentReports></RecentReports>
        </div>
    )
}