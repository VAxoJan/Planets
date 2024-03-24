import MainPlanets from "../mainPlanets/MainPlanets";
import venusLogo from "../../components/Images/venusImg/venusLast.png"

const VenusLast = () => {
  return (
    <MainPlanets
      PlanetName={"VENUS"}
      PlanetAbout={
        "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."
      }
      PlanetImg={venusLogo}
      PlanetWikipedia={212}
      RotationTime={"243 DAYS"}
      RevolutionTIme={"224.7 DAYS"}
      Radius={"6.051 KM"}
      Average={"471 C"}
      overViewLink="/venus"
      className="absolute w-56 top-[300px] left-[400px]"
      link="/venus-interval-structure"
    />
  );
};

export default VenusLast;
