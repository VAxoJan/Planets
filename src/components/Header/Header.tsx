import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const [dataMap,setDataMap] = useState<any>([])
    useEffect(() => {
        const axiosData = async () => {
            const response = await axios.get("../..data.json")
            setDataMap(response.data)
            console.log(dataMap);
        }
        axiosData()
        
    },[])
  return (
    <header className="flex list-none gap-10 bg-purple-600 w-[300px] justify-center text-white m-auto">
        <li>
            <Link to="/Mercury">Mercury</Link>
        </li>
        <li>
            <Link to="/Venus">Venus</Link>
        </li>
        <li>
            <Link to="/Earth">Earth</Link>
        </li>
    </header>
  )
}

export default Header;