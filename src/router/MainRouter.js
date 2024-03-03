import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../component/Home";
import { Layout } from "./Layout";
import Variable from "../component/variables/Variable";
import Object from "../component/variables/Object";
import Array from "../component/Array/Array";
import Page404 from "../component/Page404";

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout></Layout>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/variable" element={<Variable></Variable>}></Route>
            <Route path="/object" element={<Object></Object>}></Route>
            <Route path="/array" element={<Array></Array>}></Route>
            <Route path="*" element={<Page404></Page404>}></Route>
        </Route>
    )
)