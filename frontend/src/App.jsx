import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { TechDashboard } from './pages/TechDashBoard'
import { SignIn } from './pages/SignIn'
import { UserHomePage } from './pages/UserHomePage'
import {UserReportsPage} from './pages/UserReportsPage'
import {UserNewReport} from './pages/UserNewReport'
import { FormTwo } from "./pages/FormTwo";
import { ReportDetail } from "./pages/ReportDetail";
import Profile from "./Components/UserDashboards/Profile" ;
import Test from "./pages/Test"
import { UserLayout } from './pages/UserLayout'
import {SelectedReport} from './pages/SelectedReport'
import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'
import Explore from "./pages/Explore" 


export default function App() {
const {userData} = useContext(UserContext)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<SignIn/>}></Route>

          <Route
            path="/TechDashboard"
            element={<TechDashboard></TechDashboard>}
          ></Route>
          <Route path="/report/:reportId" element={<ReportDetail />} />

          {/* User routes wrapped with footer */}
          <Route element={<UserLayout />}>
            <Route path="/" element={<UserHomePage />} />
            <Route path="/userReportsPage" element={<UserReportsPage />} />
            <Route path="/singlereport/:reportId" element={<SelectedReport />} />
            <Route path="/reportIssue" element={<UserNewReport />} />
            <Route path="/form2" element={<FormTwo />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/" element={<TestImageClassify />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}