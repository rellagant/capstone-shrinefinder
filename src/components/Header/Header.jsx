import "./Header.scss";
import LogoImg from "../../assets/images/icons/1.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const handleButtonClick = () => {
    window.location.reload();
  };
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

        <button className="header__button" type="button" onClick={handleButtonClick}>
          Get Lucky
        </button>
      </header>
    </>
  );
}
