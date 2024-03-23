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
    />
  );
};

export default Jupiter;
