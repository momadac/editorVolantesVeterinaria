import React, { useState, useEffect , useContext } from 'react';
import { saveAs } from 'file-saver';
import { GeneralContext } from "../contexts/GeneralContext"

function ImageUploader() {
    const [imageUrl, setImageUrl] = useState(null);
    const {setTexto1 , setTexto2,seturlFoto,setTamTexto1 , setPosIniPalabra1X , setPosIniPalabra1Y , posIniPalabra1X , posIniPalabra1Y ,colorTexto1 , setColorTexto1,
        setColorTexto2, setbordeColorTexto1} = useContext(GeneralContext);

    const handleFileChange = () => {
        document.getElementById("hiddenFileInput").click();
    };

    const handleSave = () => {
        saveAs(imageUrl, 'image.jpg');
    };

    return (
        <div className="p-3">
        <div class="input-group custom-file-button">
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleFileChange}>Seleccionar imágen</button>
            <input type="file" className="d-none" id="hiddenFileInput" onChange={handleFileChange} />
        </div>
        {imageUrl && (
        <>
        <img src={imageUrl} alt="Selected image" />
            <button onClick={handleSave}>Save image</button>
            </>
        )}
        </div>
    );
}

export default ImageUploader;