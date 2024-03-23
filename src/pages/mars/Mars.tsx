import MainPlanets from "../mainPlanets/MainPlanets";
import marsLogo from '../../components/Images/4.svg';

const Mars = () => {
  return (
    <MainPlanets
      PlanetName={"MARS"}
      PlanetAbout={
        "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet"
      }
      PlanetImg={marsLogo}
      PlanetWikipedia={undefined}
      RotationTime={"1.03 DAYS"}
      RevolutionTIme={"1.88 YEARS"}
      Radius={"3,389.5 KM"}
      Average={"-28 C"}
    />
  );
};

export default Mars;
