import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header:any = () => {

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/src/components/Header/data.json")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-[85px] bg-[#070724]  text-white m-auto">
      <header className="flex list-none gap-10 w-full justify-end px-10 items-center font-headerFont">
        <li>
          <Link to="/Mercury">MERCURY</Link>
        </li>
        <li>
          <Link to="/Venus">VENUS</Link>
        </li>
        <li>
          <Link to="/Earth">EARTH</Link>
        </li>
        <li>
          <Link to="/Mars">MARS</Link>
        </li>
        <li>
          <Link to="/Jupiter">JUPITER</Link>
        </li>
        <li>
          <Link to="/Saturn">SATURN</Link>
        </li>
        <li>
          <Link to="/Uranus">URANUS</Link>
        </li>
        <li>
          <Link to="/Neptune">NEPTUNE</Link>
        </li>
      </header>
    </div>
  );
};

export default Header;
