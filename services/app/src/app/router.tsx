import { createBrowserRouter } from "react-router-dom";
import Browse from "../pages/Browse";
import SelectProfile from "../pages/SelectProfile";
import Tables from "../pages/Tables";
import AuthenticatedWrapper from "../AuthenticatedWrapper";

export default createBrowserRouter([
  {
    path: "/",
    errorElement: <p>Woops</p>,
    children: [
      {
        path: '/profiles',
        element: <SelectProfile />
      },
      {
        path: '/',
        element: <AuthenticatedWrapper />,
        children: [

          {
            path: '/browse',
            element: <Browse />
          },
          {
            path: '/tables',
            element: <Tables />
          }
        ]
      }
    ]
  },
]);
