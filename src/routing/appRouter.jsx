
import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../Component/About";
import Contact from "../Component/Contact";
import Body from "../Component/Body";
import Menu from "../Component/Menu";
import ErrorPage from "../Component/ErrorPage";
import Cart from "../Component/Cart";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,               
    errorElement: <ErrorPage />,    
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "menu/:name/:id",
        element: <Menu />,
      },
    ],
  },
]);

export default appRouter;


