import MainPlanets from "../mainPlanets/MainPlanets";
import jupiterLogo from '../../components/Images/jupiter/jupiterMiddle.png';

const JupiterMiddle = () => {
  return (
    <MainPlanets
      PlanetName={"JUPITER"}
      PlanetAbout={
        "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core."
      }
      PlanetImg={jupiterLogo}
      PlanetWikipedia={undefined}
      RotationTime={"9.93 HOURS"}
      RevolutionTIme={"11.86 YEARS"}
      Radius={"69.911 KM"}
      Average={"-108 C"}
      className="absolute w-56 left-[400px] top-[300px]"
      overViewLink="/jupiter"
      surfaceLink="/jupiter-surface-geology"
    />
  );
};

export default JupiterMiddle;
