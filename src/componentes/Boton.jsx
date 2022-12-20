import React from "react";

function Boton({texto, handleImageDownload}) {
  return (
    <div className=" p-4">
    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleImageDownload}>Descargar imágen</button>  
    </div>
  );
}

export default Boton;
