import { Link } from "react-router-dom";

const Header:any = () => {
  return (
    <div className="flex h-[85px] bg-[#070724] text-white m-auto border-y">
      <div className="flex px-[32px] items-center w-auto gap-2">
        <h1 className="font-antonio text-[28px]">
          THE
          </h1>
          <h1 className="font-antonio text-[28px]">PLANETS</h1>
      </div>
      <header className="flex list-none gap-10 w-full justify-end px-10 items-center font-headerFont">
        <li>
          <Link to="/mercury">MERCURY</Link>
        </li>
        <li>
          <Link to="/venus">VENUS</Link>
        </li>
        <li>
          <Link to="/earth">EARTH</Link>
        </li>
        <li>
          <Link to="/mars">MARS</Link>
        </li>
        <li>
          <Link to="/jupiter">JUPITER</Link>
        </li>
        <li>
          <Link to="/saturn">SATURN</Link>
        </li>
        <li>
          <Link to="/uranus">URANUS</Link>
        </li>
        <li>
          <Link to="/neptune">NEPTUNE</Link>
        </li>
      </header>
    </div>
  );
};

export default Header;
