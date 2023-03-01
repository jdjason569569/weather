export default function WeatherMainInfo({ weather }){
    return(
    <div>
        <div>{weather?.location.name}</div>
        <div>{weather?.location.country}</div>
        <div>
            <img src={`http:${weather?.current.condition.icon}`} width="128px"></img>
        </div>
        <div>{weather?.current.condition.text}</div>
        <div>{weather?.current.temp_c}</div>
        <div>{weather?.current.temp_c}</div>
    </div>
    );
}
