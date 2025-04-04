import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../Component/About";
import Contact from "../Component/Contact";
import Body from "../Component/Body";
import Menu from "../Component/Menu";

const router=createBrowserRouter([
    {
        path:"/",
        Component:App,
        children:[
            {
                path:"",
                Component:Body
            },
            {
                path:"about",
                Component:About
            },
            {
                path:"contact",
                Component:Contact
            },
            {
                path:"/menu/:title/:id",
                Component:Menu
            }
        ]
    },
   
   
])

export default router

