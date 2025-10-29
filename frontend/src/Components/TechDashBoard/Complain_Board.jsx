
import { TechnicianContext } from "../../contexts/TechnicianContext"
import { ComplainBox } from "./Complain_box"
import { useContext, useEffect, useState} from "react"

export const ComplainBoard = () => {
const {getTasks} = useContext(TechnicianContext)

const [tasksList, setTasksList] = useState([])


useEffect(()=>{
    const fetchTasks = async () => {
        const allTasks = await getTasks()
        setTasksList(allTasks || [])
    } 
    fetchTasks()
}, [])




    return (
        <div className="  grid grid-cols-1 sm:grid-cols-2 gap-12 bg-slate-100 p-3 mt-6 rounded-lg">
            {tasksList.map((task) => {
               return <ComplainBox key={task._id} {...task}></ComplainBox>;  
            })}

        </div>
    )
}