import { useState , useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Canvas from "./canvas/Canvas";
import ImageUploader from "./componentes/ImageUploader";
import Imagen from "./componentes/Imagen"
import Input from "./componentes/Input"
import Input2 from "./componentes/Input2"
import { GeneralContext } from "./contexts/GeneralContext"
import Boton from "./componentes/Boton"
import React from 'react'
import html2canvas from "html2canvas";


function App() {
  const canvas = React.useRef()
  const [urlFoto,seturlFoto] = useState();
  const [texto1, setTexto1] = useState();
  const [texto2, setTexto2] = useState();
  const [tamTexto1, setTamTexto1] = useState(25);
  const [tamTexto2, setTamTexto2] = useState(25);
  const [colorTexto1 , setColorTexto1] = useState("#FFFFFF");
  const [colorTexto2 , setColorTexto2] = useState("#FFFFFF");
  const [bordeColorTexto1, setbordeColorTexto1] = useState("#000000");
  const [bordeColorTexto2, setbordeColorTexto2] = useState("#000000");
  const [tipoFuente, setTipoFuente] = useState("Arial");
  const [posIniPalabra1X, setPosIniPalabra1X] = useState(250);
  const [posIniPalabra1Y, setPosIniPalabra1Y] = useState(260);



  const handleImageDownload = async () => {
    html2canvas(canvas.current, {
      allowTaint: true,
      useCORS: true,
    }).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "Volante.jpg";
      link.href = img;
      link.click();
    });
  };

  return (
    <GeneralContext.Provider value={ {texto1 , setTexto1 ,  texto2 , setTexto2 ,    urlFoto , seturlFoto , tamTexto1 , setTamTexto1 , tamTexto2 , setTamTexto2 , colorTexto1 , setColorTexto1,
      bordeColorTexto1 , setbordeColorTexto1 ,colorTexto2 , setColorTexto2 , bordeColorTexto2 , setbordeColorTexto2, tipoFuente , setTipoFuente ,
      posIniPalabra1X , setPosIniPalabra1X ,posIniPalabra1Y , setPosIniPalabra1Y
      }}>

      <div className="container">

        <imagen className="bg-light"><Imagen  ref={canvas} /></imagen>        
        <inputs className="bg-light text-dark"> 
          <Input   />
          <ImageUploader/>
          <Boton  handleImageDownload={handleImageDownload} />       
        </inputs>
              
      </div>
    </GeneralContext.Provider>
  );
}

export default App;
