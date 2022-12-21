
import React , { useState , useEffect, useContext } from 'react'
import { GeneralContext } from "../contexts/GeneralContext"

function FuenteTam2(){
    
    const {tamTexto2, setTamTexto2 } = useContext(GeneralContext);
    return(

        <div >
            <input className="input-range " type='range' min='10' max='100' step='1' value={tamTexto2} onChange={(e)=>setTamTexto2(e.target.value)}/>
        </div>
    )
}

export default FuenteTam2;