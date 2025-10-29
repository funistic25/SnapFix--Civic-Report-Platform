
import { Heading } from "./Heading"
import { SummaryReports } from "./SummaryReports"
import { RecentReports } from "./RecentReports"
export const Dashboard = () => {
    return (
        <div className="bg-yellow-300 w-full p-16 space-y-4">
            <Heading label_1="Department Overview " label_2="Monitor your department's pefromance and recent activity"></Heading>
            <SummaryReports></SummaryReports>
            <RecentReports></RecentReports>
        
        </div>
    )
}

