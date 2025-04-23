import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import HomePage from "./HomePage";
import Advertisers from "./Advertisers";
import Publishers from "./Publishers";
import Contact from "./Contact";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/advertiser",
        element: <Advertisers />,
      },
      {
        path: "/publisher",
        element: <Publishers />,
      },

      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
