import { Link } from "react-router-dom";
import shape from "../../components/Images/Shape.svg";

interface planets {
  PlanetName: string;
  PlanetAbout: string | number;
  PlanetImg: any;
  PlanetWikipedia: any;
  RotationTime: number | string;
  RevolutionTIme: number | string;
  Radius: number | string;
  Average: number | string;
  link?: any;
  overViewLink?:any,
  surfaceLink?:any,
  className?:string,
}

const Mercury: React.FC<planets> = ({
  PlanetName,
  PlanetAbout,
  PlanetImg,
  PlanetWikipedia,
  RotationTime,
  RevolutionTIme,
  Radius,
  Average,
  link,
  overViewLink,
  surfaceLink,
  className,
}) => {

  return (
    <>
      <div className="flex w-[58%] h-fit m-auto gap-4 my-[70px]">
        <div className="flex justify-between">
          <div className="flex justify-center">
            <img className={className} src={PlanetImg} />
          </div>
          <div className="w-[55%]">
            <h1 className="font-antonio text-white text-center text-7xl py-8">
              {PlanetName}
            </h1>
            <p className="text-white mx-[100px] text-center leading-6 text-sm">
              {PlanetAbout}
            </p>
            <div className="flex justify-center">
              <p className="flex gap-2 text-white my-[25px] text-sm">
                Source :
                <a className="underline font-bold" href={PlanetWikipedia}>
                  Wikipedia
                </a>
                <img src={shape} />
              </p>
            </div>
            <div className="grid justify-center gap-4">
              <Link to={overViewLink}>
                <button className="flex gap-x-10 px-[30px] justify-start items-center border text-white hover:bg-[#419EBB] w-[350px] h-[48px] font-headerFont">
                  <p className="font-medium">01</p>
                  <h1 className="font-bold">OVERVIEW</h1>
                </button>
              </Link>
              <Link to={link}>
                <button className="flex gap-x-10 px-[30px] justify-start items-center border text-white hover:bg-[#419EBB] w-[350px] h-[48px] font-headerFont">
                  <p className="font-medium">02</p>
                  <h1 className="font-bold">Internal Structure</h1>
                </button>
              </Link>
              <Link to={surfaceLink}>
                <button className="flex gap-x-10 px-[30px] justify-start items-center border text-white hover:bg-[#419EBB] w-[350px] h-[48px] font-headerFont">
                  <p className="font-medium">03</p>
                  <h1 className="font-bold">Surface Geology</h1>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-white w-full justify-center gap-x-7">
        <div className="border w-[255px] h-32">
          <p className="text-xs font-headerFont opacity-[50%] py-5 px-6">
            ROTATION TIME
          </p>
          <h1 className="text-white font-antonio text-[35px] px-5">
            {RotationTime}
          </h1>
        </div>
        <div className="border w-[255px] h-32">
          <p className="text-xs font-headerFont opacity-[50%] py-5 px-6">
            REVOLUTION TIME
          </p>
          <h1 className="text-white font-antonio text-[35px] px-5">
            {RevolutionTIme}
          </h1>
        </div>
        <div className="border w-[255px] h-32">
          <p className="text-xs font-headerFont opacity-[50%] py-5 px-6">
            radius
          </p>
          <h1 className="text-white font-antonio text-[35px] px-5">{Radius}</h1>
        </div>
        <div className="border w-[255px] h-32">
          <p className="text-xs font-headerFont opacity-[50%] py-5 px-6">
            AVERAGE TEMP.
          </p>
          <h1 className="text-white font-antonio text-[35px] px-5">
            {Average}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Mercury;
