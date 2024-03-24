import MainPlanets from "../mainPlanets/MainPlanets";
import eartLogo from '../../components/Images/3.svg';
const Earth = () => {
  return (
    <MainPlanets
      PlanetName={"EARTH"}
      PlanetAbout={
        "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
      }
      PlanetImg={eartLogo}
      PlanetWikipedia={undefined}
      RotationTime={"0 99 DAYS"}
      RevolutionTIme={"365.26 DAYS"}
      Radius={"6,371 KM"}
      Average={"16 C"}
      className="absolute w-56 left-[400px] top-[300px]"
      link="/earth-interval-structure"
      surfaceLink="/earth-surface-geology"
    />
  );
};

export default Earth;
