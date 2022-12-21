import React , { useState , useEffect, useContext } from 'react'
import { GeneralContext } from "../contexts/GeneralContext"
import FuenteTam2 from "../componentes/FuenteTam2";

function Input2() {

    const {texto2, setTexto2, tamTexto2, setTamTexto2, urlFoto} = useContext(GeneralContext);
    
    
    const aumentarTam2 = (e) =>{
        e.preventDefault();
        // e.stopPropagation()
        // alert("hola")
        setTamTexto2(tamTexto2 + 1)
        console.log(tamTexto2)
    }

    const disminuirTam2 = (e) =>{
        e.preventDefault();
        // e.stopPropagation()
        // alert("hola")
        setTamTexto2(tamTexto2 - 1)
        console.log(tamTexto2)
    }

    
    return (
        <form>
        <div className="input-group mt-5 mb-4 ml-4 estilo-Input">
            <input type="text" className="form-control" placeholder="" value={texto2} onChange={(e) => setTamTexto2(e.target.value)}/>
        </div>
        </form>
    );
}

export default Input2;