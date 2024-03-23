import MainPlanets from "../mainPlanets/MainPlanets";
import saturnLogo from '../../components/Images/7.svg'

const Uranus = () => {
  return (
    <MainPlanets
      PlanetName={"URANUS"}
      PlanetAbout={
        "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System."
      }
      PlanetImg={saturnLogo}
      PlanetWikipedia={undefined}
      RotationTime={"17.2 HOURS"}
      RevolutionTIme={"84 YEARS"}
      Radius={"25,362 KM"}
      Average={"-195 C"}
    />
  );
};

export default Uranus;
