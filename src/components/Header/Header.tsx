import { Link } from "react-router-dom";

const Header = () => {
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