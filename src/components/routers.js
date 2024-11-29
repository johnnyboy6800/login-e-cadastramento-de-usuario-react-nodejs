import {Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./login";
import Cadastro from "./cadastro";
import UserPage from "./usuario_page";

export default function RouterList() {
    const logged = window.localStorage.getItem("token");

    return (
            <Routes>
                <Route path="/usuario_page" element={<UserPage />}></Route>
                <Route path="/cadastro" element = {<Cadastro />}></Route>
                <Route path="/login" element={logged ? <UserPage/> : <Login />}></Route>
            </Routes>
       
    )  
}
