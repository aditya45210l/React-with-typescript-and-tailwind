import { Outlet } from "react-router"
import { RightSideBar } from "./RightSideBar"
import SideBar from "./SideBar"



const Layout = () => {
  return (
    <div className="min-h-screen grid xl:grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr] grid-cols-1 gap-1 p-0.5 font-Roboto">
      <SideBar/>
      <Outlet/>
      <RightSideBar/>
    </div>
  )
}
export default Layout