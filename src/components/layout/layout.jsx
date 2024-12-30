import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import CustSupport from "../custSupport/custSupport";
import styles from "./layout.module.css";

const Layout = () => {
  const [background, setBackground] = useState("Home");

  const setBackgroundWrapper = (name) => {
    setBackground(name);
  };

  return (
    <div
      className={styles.layout}
      style={{ backgroundImage: `url(./${background}.jpg)` }}
    >
      <NavBar onLinkClick={setBackgroundWrapper} />
      <div className={styles.content}>
        <Outlet /> {/* Renders the matched route content here */}
        <Footer />
        <CustSupport />
      </div>
    </div>
  );
};

export default Layout;
