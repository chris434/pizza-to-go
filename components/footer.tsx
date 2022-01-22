import style from "../styles/Footer.module.scss";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-black text-white p-5 md:flex block  justify-around mt-auto lg:text-lg text-sm">
      <ul>
        <h2 className="text-center">contact us</h2>
        <hr />
        <li className="p-2">
          <b>email:</b>
          <Link href="#">
            <a className="hover:text-sky-600">pizza2go@mail.co</a>
          </Link>
        </li>
        <li className="p-2">
          <b>phone:</b>
          <Link href="#">
            <a className="hover:text-sky-600">09876 0096</a>
          </Link>
        </li>
        <li className="p-2">
          <b>address:</b> 86 south ST leeds Ld43 2kh
        </li>
      </ul>
      <ul>
        <h2 className="text-center">find us on</h2>
        <hr />
        <li className="flex p-2">
          <FaTwitter className="m-4" color={"lightblue"} size="25" />
          <Link href="#">
            <a className="self-center hover:text-sky-600">
              twitter@pizza2go.co
            </a>
          </Link>
        </li>
        <li className="flex p-2">
          <FaFacebook className="m-4" color={"#0464e4"} size="25" />
          <Link href="#">
            <a className="self-center hover:text-sky-600">
              facebook@pizza2go.co
            </a>
          </Link>
        </li>
        <li className="flex p-2">
          <FaInstagram className="m-4" color={"purple"} size="25" />
          <Link href="#">
            <a className="self-center hover:text-sky-600">
              instagram@pizza2go.co
            </a>
          </Link>
        </li>
      </ul>
      <ul>
        <h2 className="text-center">copyright</h2>
        <hr />
        <li className="p-4">© pizza2go 2022</li>
      </ul>
    </footer>
  );
}
export default Footer;
