import { Outlet } from 'react-router-dom'
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'
import Dashboard from '../pages/Dashboard'
import SideBar from './MainLayout/SideBar'
import NavBar from './MainLayout/NavBar'

const DashLayout = () => {
    return (
        <>
            <NavBar/>
            <SideBar/>
            <div className="dash-container">
                {/* <Dashboard/> */}
                <Outlet />
            </div>
            <DashFooter />
        </>
    )
}
export default DashLayout