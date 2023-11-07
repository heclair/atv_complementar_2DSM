import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../components/menu";
import Lotofacil from "../pages/Lotofacil";
import Megasena from "../pages/Megasena";
import Quina from "../pages/Quina";
import "./index.css";


export default function Rotas(){
    return(
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path = "/megasena" element={<Megasena/>} />
            <Route path = "/lotofacil" element={<Lotofacil/>} />
            <Route path = "/quina" element={<Quina/>} />
            
        </Routes>        
        </BrowserRouter>
    )
}