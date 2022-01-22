import logo from "../public/images/logo.png";
import useWindowDimensions from "./hooks/useWindowDimensions";
import useToggle from "./hooks/useToggle";
import styles from "../styles/utils.module.css";
import Link from "next/link";
function Navigation(props: any) {
  return <></>;
}
function Header() {
  const { width } = useWindowDimensions();

  const [toggle, setToggle] = useToggle(false);

  return (
    <div>
      <header className="flex md:flex-row flex-col md: justify-start justify-between bg-red-600 p-5">
        <div className="flex justify-between w-100">
          <Link href="#">
            <img className="w-20 hover:cursor-pointer" src={logo.src} alt="" />
          </Link>
          <h1 className="sm:block hidden text-white text-center text-5xl ml-5">
            pizza 2 go
          </h1>
          <button
            id={styles.hamburgerMenu}
            className=" md:hidden block"
            onClick={() => setToggle()}>
            <div className="w-15 h-1 bg-white"></div>
          </button>
        </div>
        <ul
          className={`md:flex text-white mb:w-screen ${
            toggle ? " text-center mr-5 text-3xl" : "hidden text-lg"
          }  self-center`}>
          <li>
            <Link href="#">
              <a className="hover:text-sky-400">sign up</a>
            </Link>
          </li>
          <li className="mr-5 ml-5 ">
            <b className="md:block hidden">or</b>
            <hr className="md:hidden block w-50" />
          </li>
          <li>
            <Link href="#">
              <a className="hover:text-sky-400">login</a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
