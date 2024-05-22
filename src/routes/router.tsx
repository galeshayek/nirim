import { createHashRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "./Home";
import Users from "./Users/Users";
import Educational from "./Educational";
import Health from "./Health";
import Community from "./Community";
import Infrastructure from "./Infrastructure";
import ErrorEelement from "../components/ErrorElement";
import ManagerLogin from "./ManagerLogin";
import PrivateRoutes from "../components/PrivateRoute";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorEelement />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/users',
        element: <PrivateRoutes><Users /></PrivateRoutes>
      },
      {
        path: '/managerlogin',
        element: <ManagerLogin />
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
]
);