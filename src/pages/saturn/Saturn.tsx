import MainPlanets from "../mainPlanets/MainPlanets";
import saturnLogo from '../../components/Images/6.svg';

const Saturn = () => {
  return (
    <MainPlanets
      PlanetName={"SATURN"}
      PlanetAbout={
        "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth."
      }
      PlanetImg={saturnLogo}
      PlanetWikipedia={undefined}
      RotationTime={"10.8 HOURS"}
      RevolutionTIme={"29.46 YEARS"}
      Radius={"58.232 KM"}
      Average={"-138 C"}
      className="w-56"
    />
  );
};

export default Saturn;
