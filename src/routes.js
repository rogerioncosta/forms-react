import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header';

import Home from './Home';
import Sobre from './Sobre';

import Produto from "./Produto";

import Notfound from './Notfound';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>               
                <Route path="/" element={ <Home/> } />
                <Route path="/sobre" element={ <Sobre/> } />

                <Route path="/produto/:id" element={ <Produto/> } />

                <Route path="*" element={ <Notfound/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;