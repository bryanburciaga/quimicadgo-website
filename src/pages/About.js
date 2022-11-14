import React from "react";
import { useState, useEffect } from 'react'
import '../App.css'
import './About.css'


function About() {
  const [Text, setText] = useState('About');
  const [missionText, setMissionText] = useState('Mission');
  const [visionText, setVisionText] = useState('Vision');

  function handleAboutClick() {
    setText('Somos una empresa Duranguense que empezó y creció en la pandemia. Nos dedicamos en la fabricación y comercialización de productos químicos y de limpieza para el hogar. Hemos trabajado con muchas empresas y hogares duranguenses para proveer los mejores productos, con la mas alta calidad y a los mejores precios.');
  }
  function handleMissionClick() {
    setMissionText("hola");
  }
  function handleVisionClick() {
    setVisionText("adios");
  }




  return (
    <>
      <div>
        <button onClick={handleAboutClick}>{Text}</button>
      </div>
      <div>
        <button onClick={handleMissionClick}>{missionText}</button>
      </div>
      <div>
        <button onClick={handleVisionClick}>{visionText}</button>
      </div>
      </>
  );
};
  
            // <h1>Química Durango</h1>
            // <h2>Somos una empresa 100% duranguense!</h2>
            <p>Somos una empresa Duranguense que empezó y creció
            en la pandemia. 
            Nos dedicamos en la fabricación y comercialización
            de productos químicos y de limpieza para el hogar.
            Hemos trabajado con muchas empresas y hogares 
            duranguenses para proveer los mejores productos, con
            la mas alta calidad y a los mejores precios.
            </p>



      export default About;