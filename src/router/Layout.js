import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../component/ContextAPI/ContextAPI";

export const Layout = ()=>{

    const Links = [
        {
            name : "Home",
            to : "/"
        },
        {
            name : "Variable",
            to : "/variable"
        },
        {
            name : "Object",
            to : "/object"
        },
        {
            name : "Array",
            to : "/array"
        },
        {
            name : "Hooks",
            to : "/hooks"
        },
        {
            name : "HOC",
            to : "/hoc"
        },
        {
            name : "context-api",
            to : "/context-api"
        },
    ];


    return (
        <>
        <div className="mainNav">
            {
                Links.map((item)=>(
                    <NavLink key={item.name} to={item.to}>{item.name}</NavLink>
                )) 
            }

        </div>
        <Outlet></Outlet>
        </>
    );
}