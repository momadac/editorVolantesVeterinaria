
import React , { useState , useEffect, useContext } from 'react'
import { GeneralContext } from "../contexts/GeneralContext"


function FuenteTam(){
    
    const {tamTexto1, setTamTexto1 } = useContext(GeneralContext);
    return(

        <div >
            <input className="input-range " type='range' min='10' max='100' step='1' value={tamTexto1} onChange={(e)=>setTamTexto1(e.target.value)}/>
       
        </div>
    )


}

export default FuenteTam;