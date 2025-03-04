
import SideBar from './Components/SideBar'
import MainBar from './Components/MainBar'
import { RightSideBar } from './Components/RightSideBar'

const App = () => {
  return (
    <div className="min-h-screen grid xl:grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr] grid-cols-1 gap-1 p-0.5 font-Roboto">
      <SideBar/>
      <MainBar/>
      <RightSideBar/>
    </div>
  )
}

export default App