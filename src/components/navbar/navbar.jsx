import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const linkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className="proj">
        <Link to="/">
          <img src="" alt="Odin store logo" />
        </Link>
        <div>The Odin Store</div>
        <ul className="links">
          <li>
            <Link
              to="/"
              onClick={() => linkClick("Home")}
              className={`link ${activeLink === "Home" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          {["Store", "About"].map((link) => (
            <li key={link}>
              <Link
                onClick={() => linkClick(link)}
                className={`link ${activeLink === link ? "active" : ""}`}
                to={`/${link.toLowerCase()}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="profile">
          <span>Sign in</span>
          <img src="" alt="profile logo image" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
