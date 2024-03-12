import { NavLink, Outlet, useNavigate } from "react-router-dom";

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
            to : "/Hoc"
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