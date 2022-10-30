import { Link, useLocation } from "react-router-dom";

const navList = [
  {
    id: 1,
    name: "Home",
    url: "",
  },
  {
    id: 2,
    name: "About",
    url: "about",
  },
];

function Header() {
  const { pathname } = useLocation();
  const url = pathname.split("/")[1];
  return (
    <ul>
      {navList.map((menu) => (
        <li style={{ background: url === menu.url && "#ccc" }}>
          <Link to={menu.url}>{menu.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Header;
