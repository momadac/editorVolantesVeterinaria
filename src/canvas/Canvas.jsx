import React, { useState, useRef , useEffect } from "react";
import html2canvas from "html2canvas";

import Slider from "react-slick";

function Canvas() {
  const [imagenes, setimagenes] = useState([]);
  const [fotoUrl, setFotoUrl]= useState([]);
  const divPos = useSpring({x:0 , y:0})
  const divPos2 = useSpring({x:0 , y:0 })
  const bindDivs = useDrag((params)=>{
    divPos.x.set(params.offset[0]);
    divPos.y.set(params.offset[1]);
   
   
   
  });


   //bloquear el boton de agregar al llegar a las 4 palabras
  const bindDivs2 = useDrag((params)=>{
   
    divPos2.x.set(params.offset[0]);
    divPos2.y.set(params.offset[1]);
   
  });
  const canvas = useRef(null);
  const handleClick = (event, url, width, height) => {
 
    // divImagen.backgroundImage="url('https://i.imgflip.com/261o3j.jpg')";
   const el = document.getElementById('print');
   el.style.backgroundImage=`url(${url})`
   
 

   console.log(el)
    
  };
 

  const handleImageDownload = async () => {
    // const element = document.getElementById("print"),
    //   canvas = await html2canvas(element),
    //   data = canvas.toDataURL("image/jpg"),
    //   link = document.createElement("a");

    // link.href = data;
    // link.download = "downloaded-image.jpg";

    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);

    html2canvas(document.querySelector("#print"), {
      allowTaint: true,
      useCORS: true,
    }).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "Meme.jpg";
      link.href = img;
      link.click();
    });
  };

  useEffect(() => {
    console.log(imagenes);
  }, [imagenes]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setimagenes(response.data.memes))
      .catch((err) => console.error(err));
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };

  return (
    <div>
      <button type="button" onClick={handleImageDownload}>
        Download{" "}
      </button>

      <div id="print" ref={canvas}> This will downloaded as an image 
      
  
      <animated.div {...bindDivs()} style={{
          color:"#fff",
          position:'relative',
          y: divPos.y,
          x: divPos.x,
        }}>
          <p>nada</p>


        </animated.div>

      
        <animated.div {...bindDivs2()} style={{
          color:"#fff",

          y: divPos2.y,
          x: divPos2.x,
        }}>
          <p style={{fontSize:'4rem',}}>otra palabra</p>


        </animated.div>




      
      
      
      
      </div>
      
    

      <div className="carrousel">
        <Slider className="slider" {...settings}>
          {imagenes.map((imagen) => (
            <div key={imagen.id}>
              <img
                src={imagen.url}
                style={{ width: "100%", height: "10rem" }}
                alt=""
                onClick={(event) =>
                  handleClick(event, imagen.url, imagen.width, imagen.height)
                }
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Canvas;
