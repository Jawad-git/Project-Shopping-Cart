import { Outlet } from "react-router-dom";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import style from "./layout.module.css";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className={style.content}>
        <Outlet /> {/* Renders the matched route content here */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
