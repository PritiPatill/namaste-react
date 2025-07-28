import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import Header from "./components/Header";
import Body from "./components/Body"
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantsMenu";
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"))

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
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
      },
      {
        path : "/cart",
        element: <Cart />
      }
    ]
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
