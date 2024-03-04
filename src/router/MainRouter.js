import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../component/Home";
import { Layout } from "./Layout";
import Variable from "../component/variables/Variable";
import Object from "../component/variables/Object";
import Array from "../component/Array/Array";
import Page404 from "../component/Page404";
import Map from "../component/Array/Map";
import Filter from "../component/Array/Filter";
import Reduce from "../component/Array/Reduce";
import ForEach from "../component/Array/ForEach";

export const MainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout></Layout>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/variable" element={<Variable></Variable>}></Route>
            <Route path="/object" element={<Object></Object>}></Route>
            <Route path="/array" element={<Array></Array>}></Route>
            <Route path="/array/map" element={<Map></Map>}></Route>
            <Route path="/array/filter" element={<Filter></Filter>}></Route>
            <Route path="/array/reduce" element={<Reduce></Reduce>}></Route>
            <Route path="/array/foreach" element={<ForEach></ForEach>}></Route>
            <Route path="*" element={<Page404></Page404>}></Route>
        </Route>
    )
)