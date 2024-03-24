import MainPlanets from "../mainPlanets/MainPlanets";
import saturnLogo from '../../components/Images/uranus/uranusLast.png'

const UranusLast = () => {
  return (
    <MainPlanets
      PlanetName={"URANUS"}
      PlanetAbout={
        "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
      }
      PlanetImg={saturnLogo}
      PlanetWikipedia={undefined}
      RotationTime={"17.2 HOURS"}
      RevolutionTIme={"84 YEARS"}
      Radius={"25,362 KM"}
      Average={"-195 C"}
      className="absolute w-56 left-[400px] top-[300px]"
      link="/uranus-interval-structure"
      overViewLink="/uranus"
    />
  );
};

export default UranusLast;
