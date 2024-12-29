import styles from "./navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ onLinkClick }) => {
  const [activeLink, setActiveLink] = useState("Home");

  const linkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className={styles.navbar} data-testid="container">
        <div className={styles.companyCredentials}>
          <Link to="/">
            <img
              src="odin-lined.png"
              className={styles.logo}
              alt="Odin store logo"
              onClick={() => {
                linkClick("Home"), onLinkClick("Home");
              }}
            />
          </Link>
          <div>The Odin Store</div>
        </div>
        <ul className="links">
          <li>
            <Link
              to="/"
              onClick={() => {
                linkClick("Home"), onLinkClick("Home");
              }}
              className={`${styles.link} ${
                activeLink === "Home" ? styles.active : ""
              }`}
            >
              Home
            </Link>
          </li>
          {["Store", "About"].map((link) => (
            <li key={link}>
              <Link
                onClick={() => {
                  linkClick(link), onLinkClick(link);
                }}
                className={`${styles.link} ${
                  activeLink === link ? styles.active : ""
                }`}
                data-testid={link}
                to={`/${link.toLowerCase()}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.profile}>
          <span
            className={styles.signInText}
            onClick={() => console.log("sign in!")}
          >
            Sign in
          </span>
          <img
            src="profile picture.png"
            alt="profile logo image"
            className={styles.profilePicture}
          />
        </div>
      </div>
    </>
  );
};

NavBar.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
};
export default NavBar;
