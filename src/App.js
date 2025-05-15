import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import Header from "./components/Header";
import Body from "./components/Body"
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantsMenu";

const About = lazy(() => import("./components/About"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
    {
      path: "/",
      element: <Body />
    },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/restaurants/:restId",
        element: <RestaurantMenu />
      }
    ]
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
