import { useState } from "react";
import './weatherForm.css';

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
    <form onSubmit={handleSubmit} className="container">
       <input className="input" type="text" onChange={handleChange}></input>
    </form>);
}