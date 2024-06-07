import "./Footer.scss";
import { Link } from "react-router-dom";
import linkedin from "../../assets/images/icons/icons8-linkedin.svg";
import octocat from "../../assets/images/icons/github-mark.png";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <h5 className="footer__header">Get in Touch</h5>
        <div className="footer__text">
          <p className="footer__text">
            © Shrinefider. All
            Rights Reserved.
          </p>
        </div>
        <div className="footer__icons">
          <Link to="https://www.linkedin.com/in/barbara-csankova/">
            <img className="footer__icon-linkedin" src={linkedin} alt="linkedin" />
          </Link>
          <Link to="https://github.com/rellagant">
            <img className="footer__icon-github" src={octocat} alt="github" />
          </Link>
        </div>
      </footer>
    </>
  );
}
