    
import { Header } from "../Components/UserDashboards/Header"
import { Hero } from "../Components/UserDashboards/Hero" 
import { Stats } from "../Components/UserDashboards/Stats"
import { Card } from "../Components/UserDashboards/Card"
export const UserHomePage = () => {
    return (
        <div className=" ">
            <Header></Header>
            <Hero></Hero>
            <Stats></Stats>
            <Card></Card>
        </div>
    )
}

