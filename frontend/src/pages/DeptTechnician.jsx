
import { SideBar } from "../Components/DeptTechnician/SideBar"
import { Dashboard } from "../Components/DeptTechnician/DashBoard"
export const DeptTechnician  = () => {
    return (
        <>
            <div className="flex">
                <SideBar></SideBar>
                <Dashboard ></Dashboard>
            </div>
        </>
    )
}