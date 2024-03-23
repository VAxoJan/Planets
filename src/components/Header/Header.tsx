import { Link } from "react-router-dom";

const Header: any = () => {
  return (
    <div className="flex h-[85px] bg-[#070724] text-white m-auto border-y">
      <div className="flex px-[32px] items-center w-auto gap-2">
        <h1 className="font-antonio text-[28px]">THE</h1>
        <h1 className="font-antonio text-[28px]">PLANETS</h1>
      </div>
      <header className="flex list-none gap-14 w-full justify-end px-10 items-center font-headerFont">
        <div className="h-full flex items-center border-t-2 border-transparent hover:border-[#419EBB] transition duration-250 ease-in-out">
          <li>
            <Link to="/mercury">MERCURY</Link>
          </li>
        </div>
        <div className="h-full flex items-center border-t-2 border-transparent hover:border-[#419EBB] transition duration-250 ease-in-out">
        <li>
          <Link to="/venus">VENUS</Link>
        </li>
        </div>
        <div className="h-full flex items-center border-t-2 border-transparent hover:border-[#419EBB] transition duration-250 ease-in-out">
        <li>
          <Link to="/earth">EARTH</Link>
        </li>
        </div>
        <div className="h-full flex items-center border-t-2 border-transparent hover:border-[#419EBB] transition duration-250 ease-in-out">
        <li>
          <Link to="/mars">MARS</Link>
        </li>
        </div>
        <div className="h-full flex items-center border-t-2 border-transparent hover:border-[#419EBB] transition duration-250 ease-in-out">
        <li>
          <Link to="/jupiter">JUPITER</Link>
        </li>
        </div>
        <div className="h-full flex items-center border-t-2 border-transparent hover:border-[#419EBB] transition duration-250 ease-in-out">
        <li>
          <Link to="/saturn">SATURN</Link>
        </li>
        </div>
        <div className="h-full flex items-center border-t-2 border-transparent hover:border-[#419EBB] transition duration-250 ease-in-out">
        <li>
          <Link to="/uranus">URANUS</Link>
        </li>
        </div>
        <div className="h-full flex items-center border-t-2 border-transparent hover:border-[#419EBB] transition duration-250 ease-in-out">
        <li>
          <Link to="/neptune">NEPTUNE</Link>
        </li>
        </div>
      </header>
    </div>
  );
};

export default Header;
