import style from "../styles/Footer.module.scss";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className={style.footer}>
      <ul>
        <h2>contact us</h2>
        <hr />
        <li>
          <b>email:</b>
          <Link href="#">
            <a>pizza2go@mail.co</a>
          </Link>
        </li>
        <li>
          <b>phone:</b>
          <Link href="#">
            <a>09876 0096</a>
          </Link>
        </li>
        <li>
          <b>address:</b> 86 south ST leeds Ld43 2kh
        </li>
      </ul>
      <ul>
        <h2>find us on</h2>
        <hr />
        <li>
          <FaTwitter color={"lightblue"} />
          <Link href="#">
            <a> twitter@pizza2go.co</a>
          </Link>
        </li>
        <li>
          <FaFacebook color={"#0464e4"} />
          <Link href="#">
            <a> facebook@pizza2go.co</a>
          </Link>
        </li>
        <li>
          <FaInstagram color={"purple"} />
          <Link href="#">
            <a> instagram@pizza2go.co</a>
          </Link>
        </li>
      </ul>
      <ul>
        <h2>copyright</h2>
        <hr />
        <li>© pizza2go 2022</li>
      </ul>
    </footer>
  );
}
export default Footer;
