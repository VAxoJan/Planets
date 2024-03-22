import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Header from './components/Header/Header';
import { Earth, Jupiter, Mars, Mercury, Venus } from './pages/local';


const router = createBrowserRouter([
  {
    path: "/",
    element:
     <>
     <Header/>
    </>,
  },
  {
    path: "/mercury",
    element: 
    <>
    <Header/>
    <Mercury/>
    </>
    ,
  },
  {
    path: "/venus",
    element: 
    <>
    <Header/>
    <Venus/>
    </>,
  },
  {
    path: "/earth",
    element: 
    <>
    <Header/>
    <Earth/>
    </>
    ,
  },
  {
    path: "/mars",
    element: 
    <>
    <Header/>
    <Mars/>
    </>
    ,
  },
  {
    path: "/jupiter",
    element: 
    <>
    <Header/>
    <Jupiter/>
    </>
    ,
  },
  {
    path: "/earth",
    element: 
    <>
    <Header/>
    <Earth/>
    </>
    ,
  },
  {
    path: "/earth",
    element: 
    <>
    <Header/>
    <Earth/>
    </>
    ,
  },
  {
    path: "/earth",
    element: 
    <>
    <Header/>
    <Earth/>
    </>
    ,
  },
  {
    path: "*",
    element: 
    <>
    <h1 className='w-auto text-red-600 flex justify-center text-[35px]'>Page Not Found!!</h1>
    </>
    ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
  )
