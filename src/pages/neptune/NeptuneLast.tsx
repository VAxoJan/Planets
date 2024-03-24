import MainPlanets from "../mainPlanets/MainPlanets";
import neptuneLogo from "../../components/Images/neptune/neptuneLast.png";

const NeptuneLast = () => {
  return (
    <MainPlanets
      PlanetName={"NEPTUNE"}
      PlanetAbout={
        "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
      }
      PlanetImg={neptuneLogo}
      PlanetWikipedia={undefined}
      RotationTime={"16.08 HOURS"}
      RevolutionTIme={"164.79 YEARS"}
      Radius={"24,622 KM"}
      Average={"-201 "}
      className="absolute w-56 left-[400px] top-[300px]"
      overViewLink="/neptune"
      link="/neptune-interval-structure"
    />
  );
};

export default NeptuneLast;
