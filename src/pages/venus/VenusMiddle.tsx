import MainPlanets from "../mainPlanets/MainPlanets";
import venusLogo from "../../components/Images/venusImg/venusMiddle.png"

const VenusMiddle = () => {
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
      overViewLink="/venus"
      surfaceLink="/venus-surface-geology"
      className="absolute w-56 top-[300px] left-[400px]"
    />
  );
};

export default VenusMiddle;
