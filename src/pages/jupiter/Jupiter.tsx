import MainPlanets from "../mainPlanets/MainPlanets";
import jupiterLogo from '../../components/Images/5.svg';

const Jupiter = () => {
  return (
    <MainPlanets
      PlanetName={"JUPITER"}
      PlanetAbout={
        "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun."
      }
      PlanetImg={jupiterLogo}
      PlanetWikipedia={undefined}
      RotationTime={"9.93 HOURS"}
      RevolutionTIme={"11.86 YEARS"}
      Radius={"69.911 KM"}
      Average={"-108 C"}
      className="absolute w-56 left-[400px] top-[300px]"
      link="/jupiter-interval-structure"
      surfaceLink="/jupiter-surface-geology"
    />
  );
};

export default Jupiter;
