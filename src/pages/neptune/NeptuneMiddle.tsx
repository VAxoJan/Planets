import MainPlanets from "../mainPlanets/MainPlanets";
import neptuneLogo from "../../components/Images/neptune/neptuneMiddle.png";

const NeptuneMiddle = () => {
  return (
    <MainPlanets
      PlanetName={"NEPTUNE"}
      PlanetAbout={
        "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
      }
      PlanetImg={neptuneLogo}
      PlanetWikipedia={undefined}
      RotationTime={"16.08 HOURS"}
      RevolutionTIme={"164.79 YEARS"}
      Radius={"24,622 KM"}
      Average={"-201 "}
      className="absolute w-56 left-[400px] top-[300px]"
      overViewLink="/neptune"
      surfaceLink="/neptune-surface-geology"
    />
  );
};

export default NeptuneMiddle;
