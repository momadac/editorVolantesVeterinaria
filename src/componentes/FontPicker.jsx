import React, { useState , useContext } from "react";

import { GeneralContext } from "../contexts/GeneralContext";




// 
//Helvetica
//Roboto
//Anton
//Permanent Marker
//Titan 
//Luckiest 
//Creepster
//Rubik Mono One
//Notable
//Rampart One
//Rubik Mono One
const FontPicker = () => {

  const {texto1, setTexto1, urlFoto , tamTexto1, setTamTexto1,  colorTexto1 , setColorTexto1 , colorTexto2 , setColorTexto2 ,
    bordeColorTexto2 , setbordeColorTexto2 , bordeColorTexto1 , setbordeColorTexto1 , tipoFuente , setTipoFuente } = useContext(GeneralContext);

  const [fuentes, setFuentes] = useState([{"id":"1", "fuente": "impact"},{"id":"2" , "fuente":"Helvetica"},
  {"id":"3","fuente":"Roboto"},{"id":"4" , "fuente":"Anton"},{"id":"5" , "fuente":"Permanent Marker"},{"id":"6", "fuente":"Titan"},
  {"id":"7", "fuente":"Luckiest"},{"id":"8","fuente":"Creepster"},{"id":"9","fuente":"Rubik Mono One"},{"id":"10","fuente":"Notable"}, 
  {"id":"11","fuente":"Rampart One"},{"id":"12" , "fuente": "Rubik Mono One"}])

  const handleSelect = (event) => {
    setTipoFuente(event.target.value)
  }
  
  return (

  <div className="d-flex ml-4  ">
          
    <p className="mt-2">Fuente</p>
    <select className="form-select ml-3 h-100 mt-1" aria-label="Default select example" onChange={handleSelect}>
      {/* <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option> */}
      
    {fuentes.map( font =>
      
      <option key={font.id} value={font.fuente}>{font.fuente}</option>
      )}
    
    </select>
    </div>
  );
};

export default FontPicker;
