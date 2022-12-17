import React , { useState , useEffect, useContext } from 'react'
import { GeneralContext } from "../contexts/GeneralContext"


function Input2() {


    const {texto2, setTexto2, urlFoto} = useContext(GeneralContext);


    return (

        <form>
        <div className="input-group mt-5 mb-4 ml-4  estilo-Input">
        
            <input type="text" className="form-control" placeholder=""   value={texto2} onChange={(e)=>{
            //  callback(e.target.value)
            setTexto2(e.target.value)

}} />
            
        </div>
  </form>
       
      )




}

export default Input2