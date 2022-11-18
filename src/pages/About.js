import React from "react";
import { useState, useEffect } from 'react'
import '../App.css'
import './About.css'


function About() {

const [ text, setText ] = useState('Somos una empresa Duranguense que empezó y creció en la pandemia. Nos dedicamos en la fabricación y comercialización de productos químicos y de limpieza para el hogar. Hemos trabajado con muchas empresas y hogares duranguenses para proveer los mejores productos, con la mas alta calidad y a los mejores precios.');

const handleAbout = () => (
  setText('Somos una empresa Duranguense que empezó y creció en la pandemia. Nos dedicamos en la fabricación y comercialización de productos químicos y de limpieza para el hogar. Hemos trabajado con muchas empresas y hogares duranguenses para proveer los mejores productos, con la mas alta calidad y a los mejores precios.')
);

const handleMission = () => (
  setText('Comercializar y producir productos químicos de calidad para la industria y la vida cotidiana, comprometidos a satisfacer las necesidades de nuestros clientes de forma eficiente, segura y competitiva, respetando el medio ambiente y promoviendo el desarrollo integral de nuestra gente')
);

const handleVision = () => (
  setText('Ser una empresa diferenciada y sustentable en el segmento de distribución de productos químicos y productos de limpieza, expandiendo nuestraa participación en el mercado, ofreciendo soluciones innovadoras a nuestros cliente y contribuyendo al desarrollo social. Nuestra visión como empresa es crecer como empresa en el area local, para posteriormente buscar ampliarnos al mercado estatal')
);




  return (
    <>
          <h1>Nosotros</h1>
          <h2>Somos una empresa 100% duranguense!</h2>
          <div className="about">
            <div>
              <button onClick={handleAbout}>Nosotros</button>
              <button onClick={handleMission}>Mision</button>
              <button onClick={handleVision}>Vision</button>
            </div>
              <p>{text}</p>
          </div>
      </>
  );
};
  


      export default About;