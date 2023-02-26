//---------------------------------------
//   Import Dependencies
//---------------------------------------

import {createBrowserRouter, createRoutesFromElements, Route, } from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"

import { indexLoader, showLoader } from "./loaders"
import { actionsCreate, actionsDelete, actionsUpdate } from "./actions"

//---------------------------------------
//   Router Paths
//---------------------------------------

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path=":id" element={<Show/>} loader={showLoader}/>
            <Route path="create" action={actionsCreate}/>
            <Route path="update/:id" action={actionsUpdate}/>
            <Route path="delete/:id" action={actionsDelete}/>
        </Route>
    </>
))

//---------------------------------------
//   Export Router Definition
//---------------------------------------
export default router;