import { useState } from "react";

export default function WeatherForm({onChangeCity}){
    
    const [city, setCity] = useState('');

    const handleChange = (e) => {
        setCity(e.target.value);
        
    }

    const handleSubmit = (e)=>{
       e.preventDefault();
       if(city !== ""){
        onChangeCity(city);
       }
       
    }
    
    return (
    <form onSubmit={handleSubmit}>
       <input type="text" onChange={handleChange}></input>
    </form>);
}