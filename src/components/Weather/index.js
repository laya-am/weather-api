import { useState, useEffect } from "react";
import "./Weather.css";

export default function Weather(sth) {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        const timer= setTimeout(() => {

            async function fetchWeather() {
                try {
                    const response = await fetch(
                        `https://example-apis.vercel.app/api/weather`
                    );
                    const data = await response.json();
                    // console.log(data);
                    setWeather({
                        condition: data.condition,
                        temperature: data.temperature,
                        isGoodWeather: data.isGoodWeather,
                    });
                    console.log("weather: ", weather);
                } catch (error) {
                    console.error("There was an error: ",error);
                }

            }
            fetchWeather();
        }, 5000)
        return () => clearTimeout(timer);
    }, [weather]);

    return (
        <>
            <p className="weather-temperature">{weather.temperature}</p>
            <p className="weather-icon">{weather.condition}</p>
            {weather.isGoodWeather !== undefined &&
            (weather.isGoodWeather ? <h3 className="weather-message">Awesome weather! Let's go out and:</h3> : <h3 className="weather-message">Bad weather outside. But we can:</h3>)}
        </>
    );
}
