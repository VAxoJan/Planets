import MainPlanets from "../mainPlanets/MainPlanets";
import eartLogo from '../../components/Images/mars/marsLast.png';
const MarsLast = () => {
  return (
    <MainPlanets
      PlanetName={"EARTH"}
      PlanetAbout={
        "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt"      }
      PlanetImg={eartLogo}
      PlanetWikipedia={undefined}
      RotationTime={"1.03 DAYS"}
      RevolutionTIme={"1.88 YEARS"}
      Radius={"3,389.5 KM"}
      Average={"-28 C"}
      className="absolute w-56 left-[400px] top-[300px]"
      link="/mars-interval-structure"
      overViewLink="/mars"
    />
  );
};

export default MarsLast;
