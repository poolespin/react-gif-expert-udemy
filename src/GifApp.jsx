import {useState} from 'react';
import { AddCategoryApp } from './AddCategoryApp';
import { GifGridApp } from './GifGridApp';

export const GifApp = () => {

    const [category, setCategory] = useState(['Naruto']);

    const addCategory = (newCategory)=>{

        category.includes(newCategory) ? 
        alert('Nombre ya existe') : 
        setCategory([...category, newCategory])
    }

  return (
    <>
        <h1>My Gif-App</h1>
            <AddCategoryApp onNewValue = {addCategory}/>

        { 
            category.map( getCategory =>
                (<GifGridApp 
                    key={getCategory} 
                    nameCategory={getCategory}
                />
                ))
        }
    </>
  )
}
