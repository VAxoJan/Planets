import axios from "axios";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [planets, setPlanets] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      axios.get("./data.json")
        .then(response => {
          setPlanets(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
    console.log(planets);
    
    fetchData();
  }, []);

  console.log(planets);

  return (
    <div className="flex h-16 bg-purple-600 text-white">
      <header className="flex list-none gap-10 w-full justify-end px-10 items-center font-headerFont">
        {/* {planets.map((planet: any) => (
          <li key={planet.name}>
            <Link to={`/${planet.name.toUpperCase()}`}>{planet.name.toUpperCase()}</Link>
          </li>
        ))} */}
      </header>
    </div>
  );
};

export default Header;
