import{ useEffect, useState } from 'react'

import{ Routes, Route } from 'react-router-dom'

import Catalog from '../pages/Catalog';
import About from '../pages/About';
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {

    
    const [ catalog, setCatalog ] = useState(null);
    
    const API_URL = 'http://localhost:4000/api/catalog/';

    const getData = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setCatalog(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/catalogo/:id" element ={<Show />} />
                <Route path="/catalogo/" element ={<Catalog catalog={catalog} />} />
                <Route path="/About" element ={<About />} />
            </Routes>
        </main>
    );
}

export default Main;