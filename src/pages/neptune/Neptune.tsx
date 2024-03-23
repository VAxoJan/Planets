import MainPlanets from "../mainPlanets/MainPlanets";
import neptuneLogo from "../../components/Images/8.svg";

const Neptune = () => {
  return (
    <MainPlanets
      PlanetName={"NEPTUNE"}
      PlanetAbout={
        "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
      }
      PlanetImg={neptuneLogo}
      PlanetWikipedia={undefined}
      RotationTime={"16.08 HOURS"}
      RevolutionTIme={"164.79 YEARS"}
      Radius={"24,622 KM"}
      Average={"-201 "}
    />
  );
};

export default Neptune;
