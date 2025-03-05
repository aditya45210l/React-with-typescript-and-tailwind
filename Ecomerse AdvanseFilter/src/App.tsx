import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Components/Layout'
import MainBar from './Components/MainBar'
import ProductPage from './Components/ProductPage';


const route = createBrowserRouter([
  {path:'/',
    element:<Layout/>,
    children:[
      {index:true, element:<MainBar/>},
      {path:'product/:id',element:<ProductPage/>}
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={route}/>
  )
}

export default App