import React, { useState, useEffect , useContext } from 'react';
import { saveAs } from 'file-saver';
import { GeneralContext } from "../contexts/GeneralContext"


function ImageUploader() {
    const [imageUrl, setImageUrl] = useState(null);
    const {setTexto1 , setTexto2,seturlFoto,setTamTexto1 , setPosIniPalabra1X , setPosIniPalabra1Y , posIniPalabra1X , posIniPalabra1Y ,colorTexto1 , setColorTexto1,
        setColorTexto2, setbordeColorTexto1} = useContext(GeneralContext);
  
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const fileUrl = URL.createObjectURL(file);
        seturlFoto(fileUrl);
    };

    const handleSave = () => {
        saveAs(imageUrl, 'image.jpg');
    };

    return (
        <div className=" p-5">
        <input type="file" className="btn btn-primary btn-lg btn-block" onChange={handleFileChange} />
        
        
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