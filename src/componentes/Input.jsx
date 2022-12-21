import React , { useState , useEffect, useContext } from 'react'
import { GeneralContext } from "../contexts/GeneralContext"
import Boton from "../componentes/Boton"
import ColorPicker from '../componentes/ColorPicker';
import FuenteTam from "../componentes/FuenteTam";
import FontPicker from "../componentes/FontPicker"
import { Fragment } from 'react';
import FuenteTam2 from './FuenteTam2';

function Input() {

    const {texto1, setTexto1, urlFoto , tamTexto1, setTamTexto1,  colorTexto1 , setColorTexto1 , colorTexto2 , setColorTexto2 ,
        bordeColorTexto2 , setbordeColorTexto2 , bordeColorTexto1 , setbordeColorTexto1 , texto2, setTexto2, } = useContext(GeneralContext);
    
    const [fuente, setFuente]= useState("Open Sans");
    

    const aumentarTam = (e) =>{
    
        e.preventDefault();
        // e.stopPropagation()
        // alert("hola")
        setTamTexto1(tamTexto1 + 1)
        console.log(tamTexto1)
    }

    const disminuirTam = (e) =>{
    
        e.preventDefault();
       // e.stopPropagation()
       // alert("hola")
        setTamTexto1(tamTexto1 - 1)
        console.log(tamTexto1)
    }

    return (
        <Fragment>

        <form>
        <div className="input-group mt-4 ml-4  estilo-Input">
            <h1 className="ml-2">Crea tu volante:</h1>
            <div className="d-flex flex-column w-100">
            <input type="text" className="form-control w-100" placeholder="aquí va el primer texto"   value={texto1} onChange={(e)=>{
            setTexto1(e.target.value)}} />
            
            <input type="text" className="form-control mt-3" placeholder="aquí el segundo si lo desea"   value={texto2} onChange={(e)=>{
            //  callback(e.target.value)
            setTexto2(e.target.value)}}/>
            </div>


            
            
        </div>
        <div className="input-group mt-3  ml-4  estilo-Input d-flex justify-content-evenly ">
        <p>Tamaño fuente:</p> <div className="ml-2 mt-1 align-self-start " ><FuenteTam/><FuenteTam2/></div>

        </div>


        <FontPicker/>

    
        < div className="d-flex flex-column">

                <ColorPicker/>

        
        </div>
    </form>

</Fragment>
    
    )

}

export default Input