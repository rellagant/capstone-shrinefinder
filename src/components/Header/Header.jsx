import "./Header.scss";
import LogoImg from "../../assets/images/icons/1.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <div className="header__logo">
            <img
              className="header__logo"
              src={LogoImg}
              alt="Shrine Finder Logo"
            />
          </div>
        </Link>

        <button className="header__button" type="submit">
          Get Lucky
        </button>
      </header>
    </>
  );
}
