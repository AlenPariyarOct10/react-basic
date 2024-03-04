import { NavLink, Outlet } from "react-router-dom";
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
    ]

    return (
        <>
        <div className="mainNav">
            {
                Links.map((item)=>(
                    <NavLink to={item.to}>{item.name}</NavLink>
                ))
                
            }
           
        </div>
        <Outlet></Outlet>
        </>
    );
}