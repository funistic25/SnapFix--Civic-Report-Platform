import { Header } from "../Components/TechDashBoard/Header"
import { StatusBoard } from "../Components/TechDashBoard/StatusBoard"
import { ComplainBoard } from "../Components/TechDashBoard/Complain_Board"
import { useContext } from "react"
import { TechnicianContext } from "../contexts/TechnicianContext"


export const TechDashboard = () => {

    const {techData, loading} = useContext(TechnicianContext)
    
    return (
        <>
            <div className="bg-white p-5">
                {loading? "..loading": 
                <Header name={techData.userName} Role="Senior Waste Management" subRole="Manage your assigned tasks and track progress"></Header>}
                <StatusBoard label_1="All" label_2="Pending" label_3="In progress" label_4="Resolved"></StatusBoard>
                <ComplainBoard></ComplainBoard>
            </div>
        </>
    )
}

