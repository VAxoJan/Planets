import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { Earth, Mercury, Venus } from './pages';
import Header from './components/Header/Header';


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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
  )
