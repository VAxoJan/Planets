import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import { Earth, EarthLast, EarthMiddle, Jupiter, JupiterLast, JupiterMiddle, Mars, MarsLast, MarsMiddle, Mercury, Neptune, NeptuneLast, NeptuneMiddle, Saturn, SaturnLast, SaturnMiddle, Uranus, UranusLast, UranusMiddle, Venus, VenusLast, VenusMiddle } from "./pages/local";
import mercuryLogo from './components/Images/mercury.svg'
import mercuryMiddle from './components/Images/mercury/mercuryMiddle.png';
import mercuryLst from './components/Images/mercury/mercuryLast.png';

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
        <Header />venusLogo
        <Mercury
          PlanetName={"Mercury"}
          PlanetAbout={"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."}
          PlanetImg={mercuryLogo}
          PlanetWikipedia={undefined}
          RotationTime={"58.6 DAYS"}
          RevolutionTIme={"87.9 DAYS"}
          Radius={"2,439.7 KM"}
          Average={"430 C"}
          link="/mercury/internal-structure-mercury"
          surfaceLink="/mercury/surface-geology"
          className="h-fit py py-[120px] w-56"
        />
      </>
    ),
  },
  {
    path: "/mercury/internal-structure-mercury",
    element: (
      <>
        <Header />
        <Mercury
          PlanetName={"Mercury"}
          PlanetAbout={"Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."}
          PlanetImg={mercuryMiddle}
          PlanetWikipedia={undefined}
          RotationTime={"58.6 DAYS"}
          RevolutionTIme={"87.9 DAYS"}
          Radius={"2,439.7 KM"}
          Average={"430 C"}
          overViewLink="/mercury"
          className="h-fit py py-[120px] w-56"
          surfaceLink="/mercury/surface-geology"
        />
      </>
    ),
  },
  {
    path: "/mercury/surface-geology",
    element: (
      <>
        <Header />
        <Mercury
          PlanetName={"Mercury"}
          PlanetAbout={"Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."}
          PlanetImg={mercuryLst}
          PlanetWikipedia={undefined}
          RotationTime={"58.6 DAYS"}
          RevolutionTIme={"87.9 DAYS"}
          Radius={"2,439.7 KM"}
          Average={"430 C"}
          overViewLink="/mercury"
          className="h-fit py-[120px] w-44"
          link="/mercury/internal-structure-mercury"
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
    path: "venus-interval-structure",
    element: (
      <>
        <Header />
        <VenusMiddle/>
      </>
    ),
  },
  {
    path: "venus-surface-geology",
    element: (
      <>
        <Header />
        <VenusLast/>
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
    path: "/earth-interval-structure",
    element: (
      <>
        <Header />
        <EarthMiddle/>
      </>
    ),
  },
  {
    path: "/earth-surface-geology",
    element: (
      <>
        <Header />
        <EarthLast/>
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
    path: "/mars-interval-structure",
    element: (
      <>
        <Header />
        <MarsMiddle />
      </>
    ),
  },
  {
    path: "/mars-surface-geology",
    element: (
      <>
        <Header />
        <MarsLast />
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
    path: "/jupiter-interval-structure",
    element: (
      <>
        <Header />
        <JupiterMiddle />
      </>
    ),
  },
  {
    path: "/jupiter-surface-geology",
    element: (
      <>
        <Header />
        <JupiterLast />
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
    path: "/saturn-interval-structure",
    element: (
      <>
        <Header />
        <SaturnMiddle />
      </>
    ),
  },
  {
    path: "/saturn-surface-geology",
    element: (
      <>
        <Header />
        <SaturnLast />
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
    path: "/uranus-interval-structure",
    element: (
      <>
        <Header />
        <UranusMiddle />
      </>
    ),
  },
  {
    path: "/uranus-surface-geology",
    element: (
      <>
        <Header />
        <UranusLast />
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
    path: "/neptune-interval-structure",
    element: (
      <>
        <Header />
        <NeptuneMiddle />
      </>
    ),
  },
  {
    path: "/neptune-surface-geology",
    element: (
      <>
        <Header />
        <NeptuneLast />
      </>
    ),
  },
  {
    path: "https://planets-psi.vercel.app",
    element: (
      <>
        <Header />
        <Mercury PlanetName={""} PlanetAbout={""} PlanetImg={undefined} PlanetWikipedia={undefined} RotationTime={""} RevolutionTIme={""} Radius={""} Average={""} />
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
