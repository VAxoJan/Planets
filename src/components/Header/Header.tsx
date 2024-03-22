import { useEffect} from "react";
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
          console.log(error);
          
        });
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-[85px] bg-[#070724] text-white m-auto">
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
