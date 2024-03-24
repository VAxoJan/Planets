import MainPlanets from "../mainPlanets/MainPlanets";
import eartLogo from '../../components/Images/earth/earthMiddle.png';
const EarthMiddle = () => {
  return (
    <MainPlanets
      PlanetName={"EARTH"}
      PlanetAbout={
        "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
      }
      PlanetImg={eartLogo}
      PlanetWikipedia={undefined}
      RotationTime={"0 99 DAYS"}
      RevolutionTIme={"365.26 DAYS"}
      Radius={"6,371 KM"}
      Average={"16 C"}
      className="absolute w-56 left-[400px] top-[300px]"
      overViewLink="/earth"
      surfaceLink="/earth-surface-geology"
    />
  );
};

export default EarthMiddle;
