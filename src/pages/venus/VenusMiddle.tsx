import MainPlanets from "../mainPlanets/MainPlanets";
import venusLogo from "../../components/Images/venusImg/venusMiddle.png"

const VenusMiddle = () => {
  return (
    <MainPlanets
      PlanetName={"VENUS"}
      PlanetAbout={
        "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."
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
