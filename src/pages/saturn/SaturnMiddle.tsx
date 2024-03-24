import MainPlanets from "../mainPlanets/MainPlanets";
import saturnLogo from '../../components/Images/saturn/saturnMiddle.png';

const SaturnMiddle = () => {
  return (
    <MainPlanets
      PlanetName={"SATURN"}
      PlanetAbout={
        "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass."
      }
      PlanetImg={saturnLogo}
      PlanetWikipedia={undefined}
      RotationTime={"10.8 HOURS"}
      RevolutionTIme={"29.46 YEARS"}
      Radius={"58.232 KM"}
      Average={"-138 C"}
      className="absolute w-56 left-[400px] top-[300px]"
      overViewLink="/saturn"
      surfaceLink="/saturn-surface-geology"
    />
  );
};

export default SaturnMiddle;
