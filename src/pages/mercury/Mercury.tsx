import React, { useEffect, useState } from "react";
import planetImg from "../../components/Images/mercury.svg";
import shape from '../../components/Images/Shape.svg';
interface IDataItem {
  id: number;
  name: string;
  content: any;
}

const Mercury: React.FC = () => {
  const [data, setData] = useState<IDataItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/components/Header/data.json");
        if (!response.ok) {
          throw new Error("error");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="flex w-[58%] h-fit m-auto gap-4 my-[80px]">
      <div className="flex justify-between">
      <div className="flex justify-center">
        <img className="w-[80%]" src={planetImg} />
      </div>
      <div className="w-[50%]">
        <h1 className="font-antonio text-white text-center text-7xl py-8">MERCURY</h1>
        <p className="text-white mx-[100px] text-center leading-6 text-sm">
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets
          in the Solar System, and is a rocky body like Earth.
        </p>
        <div className="flex justify-center">
          <p className="flex gap-2 text-white my-[25px] text-sm">Source : 
            <a className="underline font-bold" href="#"> Wikipedia</a>
            <img src={shape}/>
          </p>
        </div>
        <div className="grid justify-center gap-4">
          <button className="flex gap-x-10 px-[30px] justify-start items-center border text-white hover:bg-[#419EBB] w-[350px] h-[48px] font-headerFont">
            <p className="font-medium">01</p>
            <h1 className="font-bold">OVERVIEW</h1>
          </button>
          <button className="flex gap-x-10 px-[30px] justify-start items-center border text-white hover:bg-[#419EBB] w-[350px] h-[48px] font-headerFont">
            <p className="font-medium">02</p>
            <h1 className="font-bold">Internal Structure</h1>
          </button>
          <button className="flex gap-x-10 px-[30px] justify-start items-center border text-white hover:bg-[#419EBB] w-[350px] h-[48px] font-headerFont">
            <p className="font-medium">03</p>
            <h1 className="font-bold">Surface Geology</h1>
          </button>
        </div>
      </div>
      </div>
    </div>
    <div className="flex text-white w-full justify-center gap-x-7">
      <div className="border w-[255px] h-32">
        <p className="text-xs font-headerFont opacity-[50%] py-5 px-6">ROTATION TIME</p>
        <h1 className="text-white font-antonio text-[35px] px-5">58.6 Days</h1>
      </div>
      <div className="border w-[255px] h-32">
        <p className="text-xs font-headerFont opacity-[50%] py-5 px-6">REVOLUTION TIME</p>
        <h1 className="text-white font-antonio text-[35px] px-5">87.97 DAYS</h1>
      </div>
      <div className="border w-[255px] h-32">
        <p className="text-xs font-headerFont opacity-[50%] py-5 px-6">radius</p>
        <h1 className="text-white font-antonio text-[35px] px-5">2,439.7 KM</h1>
      </div>
      <div className="border w-[255px] h-32">
        <p className="text-xs font-headerFont opacity-[50%] py-5 px-6">AVERAGE TEMP.</p>
        <h1 className="text-white font-antonio text-[35px] px-5">430 C</h1>
      </div>
      </div>    
    </>

  );
};

export default Mercury;
