import MainPlanets from "../mainPlanets/MainPlanets";
import venusLogo from "../../components/Images/2.svg"

const Venus = () => {
  return (
    <MainPlanets
      PlanetName={"VENUS"}
      PlanetAbout={
        "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight."
      }
      PlanetImg={venusLogo}
      PlanetWikipedia={212}
      RotationTime={"243 DAYS"}
      RevolutionTIme={"224.7 DAYS"}
      Radius={"6.051 KM"}
      Average={"471 C"}
      className="absolute w-56 top-[300px] left-[400px]"
      surfaceLink="/venus-surface-geology"
      link="/venus-interval-structure"
    />
  );
};

export default Venus;
