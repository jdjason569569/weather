import './weatherMainInfo.css';

export default function WeatherMainInfo({ weather }) {
    return (
        <div className='mainInfo'>
            <div className='city'>{weather?.location.name}</div>
            <div className='country'>{weather?.location.country}</div>
            <div className='row'>
                <img src={`http:${weather?.current.condition.icon}`} width="128px"></img>
            </div>
            <div className='condition'>
                <div className='condition'>{weather?.current.condition.text}</div>
                <div className='current'>{weather?.current.temp_c} centigrados</div>
            </div>
            <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15944.55102627643!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1677732508231!5m2!1ses!2sco`}
                width="100%"
                height="450px"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}
