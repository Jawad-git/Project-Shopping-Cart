import { Outlet } from "react-router-dom";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = () => {
  return (
    <div className="">
      <NavBar />
      <Outlet /> {/* Renders the matched route content here */}
      <Footer />
    </div>
  );
};

export default Layout;
