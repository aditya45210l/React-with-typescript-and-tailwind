import SideBar from "./SideBar"
import Table from "./Table"

const Dashboad = () => {
  return (
    <div className="flex min-h-screen">
        <SideBar/>
        <div className="flex-1">
          {/* {Main table} */}
          <Table/>
        </div>
    </div>
  )
}

export default Dashboad