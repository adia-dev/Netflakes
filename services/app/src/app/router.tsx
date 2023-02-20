import { createBrowserRouter } from "react-router-dom";
import Browse from "../pages/Browse";
import SelectProfile from "../pages/SelectProfile";

export default createBrowserRouter([
  {
    path: "/",
    errorElement: <p>Woops</p>,
    children: [
      {
        path: '/browse',
        element: <Browse />
      },
      {
        path: '/profiles',
        element: <SelectProfile />
      }
    ]
  },
]);
