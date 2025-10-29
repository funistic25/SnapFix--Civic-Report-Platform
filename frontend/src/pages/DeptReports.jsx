
import { SideBar } from "../Components/DeptTechnician/SideBar"
import { DashBoard } from "../Components/DeptReports/DashBoard"


export const DeptReports = () => {
    return (
        <div className="flex">
            <SideBar></SideBar>
            <DashBoard></DashBoard>
        </div>
    )
}

