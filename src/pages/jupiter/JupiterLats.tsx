import MainPlanets from "../mainPlanets/MainPlanets";
import jupiterLogo from '../../components/Images/jupiter/jupiterLast.png';

const JupiterLast = () => {
  return (
    <MainPlanets
      PlanetName={"JUPITER"}
      PlanetAbout={
        "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."
      }
      PlanetImg={jupiterLogo}
      PlanetWikipedia={undefined}
      RotationTime={"9.93 HOURS"}
      RevolutionTIme={"11.86 YEARS"}
      Radius={"69.911 KM"}
      Average={"-108 C"}
      className="absolute w-56 left-[400px] top-[300px]"
      link="/jupiter-interval-structure"
      overViewLink="/jupiter"
    />
  );
};

export default JupiterLast;
