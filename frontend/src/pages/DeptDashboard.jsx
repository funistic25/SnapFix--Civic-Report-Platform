
import { SideBar } from "../Components/DeptTechnician/SideBar"
import { DashBoard } from "../Components/DeptDashboard/DashBoard"

export const DeptDashboard = () => {
    return(
        <div className="flex">
            <SideBar></SideBar> 
            <DashBoard></DashBoard>
        </div>
    )
}

