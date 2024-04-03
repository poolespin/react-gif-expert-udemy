import { useState } from "react";


export const AddCategoryApp = ({onNewValue}) => {

    const [inputValue, setinputValue] = useState('');

    const AddValue = ({target})=>{
        setinputValue(target.value);
    }

    const sendForm = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        onNewValue(inputValue);
        setinputValue('');
    }

  return (
    <form onSubmit={sendForm}>
        <input 
            type="text"
            placeholder="Ingresar busqueda"
            value={inputValue}
            onChange={AddValue}
        />
    </form>
  )
}
