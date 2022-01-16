import logo from "../public/images/logo.png";
import useWindowDimensions from "./hooks/useWindowDimensions";
import useToggle from "./hooks/useToggle";
import { header, flex } from "../styles/Header.module.scss";
import Link from "next/link";

function Header() {
  const { width } = useWindowDimensions();

  const [toggle, setToggle] = useToggle({
    defaultValue: "none",
    values: ["flex", "none"],
  });

  return (
    <header className={`${header} ${flex}`}>
      <Link href="#">
        <img src={logo.src} alt="" />
      </Link>
      <h1>pizza 2 go</h1>

      <ul
        className={flex}
        style={{ display: toggle == "none" && width >= 815 ? "flex" : toggle }}>
        <li>
          <Link href="#">
            <a>sign up</a>
          </Link>
        </li>
        <li>{width <= 815 ? <hr width="100" /> : <b>or</b>}</li>
        <li>
          <Link href="#">
            <a>login</a>
          </Link>
        </li>
      </ul>
      <button onClick={() => setToggle()}>
        <div></div>
      </button>
    </header>
  );
}
export default Header;
