import HomePage from "../pages/homePage/homePage";
import StorePage from "../pages/storepage/storePage";
import ErrorElement from "../pages/errorElement/errorElement";
import AboutPage from "../pages/aboutPage/aboutpage";
import App from "../App";
import Layout from "../components/layout/layout";
//import Layout from "../components/layout/layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "store",
        element: <StorePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
];

export default routes;
