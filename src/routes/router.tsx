import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "./Home";
import Educational from "./Educational";
import Health from "./Health";
import Community from "./Community";
import Infrastructure from "./Infrastructure";
import ErrorElement from "../components/ErrorElement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/educationalfacilities',
        element: <Educational />
      },
      {
        path: '/health',
        element: <Health />
      },
      {
        path: '/community',
        element: <Community />
      },
      {
        path: '/infrastructure',
        element: <Infrastructure />
      },
    ],
  },
]);
