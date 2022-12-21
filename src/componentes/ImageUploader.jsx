import React, { useState, useEffect , useContext } from 'react';
import { saveAs } from 'file-saver';
import { GeneralContext } from "../contexts/GeneralContext"

function ImageUploader() {
    const [imageUrl, setImageUrl] = useState(null);
    const {setTexto1 , setTexto2,seturlFoto,setTamTexto1 , setPosIniPalabra1X , setPosIniPalabra1Y , posIniPalabra1X , posIniPalabra1Y ,colorTexto1 , setColorTexto1,
        setColorTexto2, setbordeColorTexto1} = useContext(GeneralContext);

    function handleFileChange(event) {
        const file = event.target.files[0];
        const fileUrl = URL.createObjectURL(file);
        seturlFoto(fileUrl);
    }

    function handleFileInputClick() {
        document.getElementById("inputGroupFile").click();
    }

    const handleSave = () => {
        saveAs(imageUrl, 'image.jpg');
    };

    return (
        <div className="p-3">
        <div className="p-4">
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleFileInputClick}>Cargar imágen</button>  
        </div>
        <div class="input-group custom-file-button">
            <input type="file" className="btn btn-primary btn-lg btn-block" id="inputGroupFile" onChange={handleFileChange} style={{display: "none"}} />
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