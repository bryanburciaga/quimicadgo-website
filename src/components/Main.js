import{ useEffect, useState } from 'react'

import{ Routes, Route } from 'react-router-dom'

import Catalog from '../pages/Catalog';
import About from '../pages/About';
import Index from "../pages/Index";
import Show from "../pages/Show";
import Contact from '../pages/Contact';

function Main(props) {

    
    const [ catalog, setCatalog ] = useState(null);

    const getData = async () => {
        try {
            const response = await fetch();
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
                <Route path="/About" element ={<About />} />
                <Route path="/catalogo/" element ={<Catalog
                            catalog={catalog}
                        />} 
                  />
                 <Route path="/catalogo/:id" element ={<Show
                            catalog={catalog} 
                        />} 
                 />
                <Route path="/Contacto" element ={<Contact />} />
            </Routes>
        </main>
    );
}

export default Main;