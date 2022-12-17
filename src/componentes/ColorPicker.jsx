import React , { useState, useEffect , useContext} from 'react';
import { GeneralContext } from "../contexts/GeneralContext";
import styled from "styled-components";


const Container = styled.span`
  display: inline-flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 14px 12px;

 

  input[type="color"] {
    margin-right: 8px;
    margin-top: 2px;
    -webkit-appearance: none;
    border: none;
    width: auto;
    height: auto;
    cursor: pointer;
    background: none;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 14px;
      height: 14px;
    }
    &::-webkit-color-swatch {
      border: 1px solid #bfc9d9;
      border-radius: 4px;
      padding: 0;
      
    }
  }

  input[type="text"] {
    border: none;
    width: 100%;
    font-size: 14px;
    height:70%;
  }
`;

const ColorPicker = ({colTexto1,bordeTexto1, colTexto2 , bordeTexto2 }) => {
    const { texto1, setTexto1, texto2 ,  urlFoto , colorTexto1 , setColorTexto1,setbordeColorTexto1, bordeColorTexto1 } = useContext(GeneralContext);
    
    const getColor = ()=> {
      let colorElegido = document.getElementById('colorr')
  
  

        setColorTexto1(colorElegido.value)


    

      
      
   }


   const getBorde = ()=> {
    let colorElegido = document.getElementById('borde')

    
      setbordeColorTexto1(colorElegido.value)

    
    
    
 }

    return (
      <Container>
        <div>
          <div className="d-flex ml-3  justify-content-between ">
            <p> Color Fuente:</p>

            <div className="d-flex ml-2 h-100 mt-1">
              <input
                type="color"
                id="colorr"
                onChange={getColor}
                value={colorTexto1}
              ></input>
              <input type="text" value={colorTexto1} onChange={getColor} />
            </div>
          </div>

          <div className="d-flex ml-3  justify-content-between ">
            <p> Color Borde:</p>

            <div className="d-flex ml-2 h-100 mt-1">
              <input
                type="color"
                id="borde"
                onChange={getBorde}
                value={bordeColorTexto1}
              ></input>
              <input type="text" value={bordeColorTexto1} onChange={getBorde} />
            </div>
          </div>
        </div>
      </Container>
    );
}

export default ColorPicker