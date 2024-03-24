import MainPlanets from "../mainPlanets/MainPlanets";
import logo from "../../components/Images/mars/marsMiddle.png"
const MarsMiddle = () => {
  return (
    <MainPlanets
      PlanetName={"EARTH"}
      PlanetAbout={
        "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
      }
      PlanetImg={logo}
      PlanetWikipedia={undefined}
      RotationTime={"1.03 DAYS"}
      RevolutionTIme={"1.88 YEARS"}
      Radius={"3,389.5 KM"}
      Average={"-28 C"}
      className="absolute w-56 left-[400px] top-[300px]"
      overViewLink="/mars"
      surfaceLink="/mars-surface-geology"
    />
  );
};

export default MarsMiddle;
