import MainPlanets from "../mainPlanets/MainPlanets";
import saturnLogo from '../../components/Images/uranus/uranusMiddle.png'

const UranusMiddle = () => {
  return (
    <MainPlanets
      PlanetName={"URANUS"}
      PlanetAbout={
        "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
      }
      PlanetImg={saturnLogo}
      PlanetWikipedia={undefined}
      RotationTime={"17.2 HOURS"}
      RevolutionTIme={"84 YEARS"}
      Radius={"25,362 KM"}
      Average={"-195 C"}
      className="absolute w-56 left-[400px] top-[300px]"
      overViewLink="/uranus"
      surfaceLink="/uranus-surface-geology"
    />
  );
};

export default UranusMiddle;
