import { useEffect, useState } from "react";
import { getGif } from "./helpers/getGifs"
import { GifItem } from "./GifItem";

export const GifGridApp = ({nameCategory}) => {

  const [images, setImages] = useState([])

  const getImagen = async()=>{
    const newImagen = await getGif(nameCategory)
    setImages(newImagen)
  }

useEffect(()=>{
  getImagen();
},[])

  return (
    <>
        <h4>{nameCategory}</h4>
        <div className="card-grid">
          {
            images.map(image => (
              <GifItem key={image.id} 
              {...image}/>
            ))
          }
        </div>
    </>
  )
}
