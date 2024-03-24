import MainPlanets from "../mainPlanets/MainPlanets";
import saturnLogo from '../../components/Images/saturn/saturnLast.png';

const SaturnLast = () => {
  return (
    <MainPlanets
      PlanetName={"SATURN"}
      PlanetAbout={
        "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. "
      }
      PlanetImg={saturnLogo}
      PlanetWikipedia={undefined}
      RotationTime={"10.8 HOURS"}
      RevolutionTIme={"29.46 YEARS"}
      Radius={"58.232 KM"}
      Average={"-138 C"}
      className="absolute w-56 left-[400px] top-[300px]"
      link="/saturn-interval-structure"
      overViewLink="/saturn"
    />
  );
};

export default SaturnLast;
