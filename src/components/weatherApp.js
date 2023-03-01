import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";

export default function WeatherApp() {

    const [weather, setWeather] = useState(null);

    useEffect(()=>{
      loadInfo();
    },[]);

    const onChangeCity = (city) => {
        setWeather(null);
        loadInfo(city);

    }

    const loadInfo = async (city  = "london") => {
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);
            const response = await request.json();
            setWeather(response);
            console.log(response.location.country);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <WeatherForm onChangeCity={onChangeCity}></WeatherForm>
            {weather ? <WeatherMainInfo weather={weather}></WeatherMainInfo> : 'cargando.....'}
            
        </>
    );
}