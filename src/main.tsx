import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Header from './components/Header/Header';
import App from './App';
import { Earth, Jupiter, Mars, Mercury, Venus } from './pages/local';


const router = createBrowserRouter([
  {
    path: "/",
    element:
     <>
     <App/>
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
    <App>
    <Header/>
    <Earth/>
    </App>
    ,
  },
  {
    path: "/mars",
    element: 
    <App>
    <Header/>
    <Mars/>
    </App>
    ,
  },
  {
    path: "/jupiter",
    element: 
    <App>
    <Header/>
    <Jupiter/>
    </App>
    ,
  },
  {
    path: "/earth",
    element: 
    <App>
    <Header/>
    <Earth/>
    </App>
    ,
  },
  {
    path: "/earth",
    element: 
    <App>
    <Header/>
    <Earth/>
    </App>
    ,
  },
  {
    path: "/earth",
    element: 
    <App>
    <Header/>
    <Earth/>
    </App>
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
