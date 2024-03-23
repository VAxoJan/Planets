import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import { Earth, Jupiter, Mars, Mercury, Neptune, Saturn, Uranus, Venus } from "./pages/local";
import mercuryLogo from './components/Images/mercury.svg'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
      </>
    ),
  },
  {
    path: "/mercury",
    element: (
      <>
        <Header />
        <Mercury
          PlanetName={"Mercury"}
          PlanetAbout={"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."}
          PlanetImg={mercuryLogo}
          PlanetWikipedia={undefined}
          RotationTime={"58.6 DAYS"}
          RevolutionTIme={"87.9 DAYS"}
          Radius={"2,439.7 KM"}
          Average={"430 C"}
        />
      </>
    ),
  },
  {
    path: "/venus",
    element: (
      <>
        <Header />
        <Venus />
      </>
    ),
  },
  {
    path: "/earth",
    element: (
      <>
        <Header />
        <Earth />
      </>
    ),
  },
  {
    path: "/mars",
    element: (
      <>
        <Header />
        <Mars />
      </>
    ),
  },
  {
    path: "/jupiter",
    element: (
      <>
        <Header />
        <Jupiter />
      </>
    ),
  },
  {
    path: "/saturn",
    element: (
      <>
        <Header />
        <Saturn />
      </>
    ),
  },
  {
    path: "/uranus",
    element: (
      <>
        <Header />
        <Uranus />
      </>
    ),
  },
  {
    path: "/neptune",
    element: (
      <>
        <Header />
        <Neptune />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <h1 className="w-auto text-red-600 flex justify-center text-[35px]">
          Page Not Found!!
        </h1>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
