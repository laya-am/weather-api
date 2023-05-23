import { useState, useEffect } from "react";
import "./Weather.css";

export default function Weather({setIsGoodWeather, isGoodWeather}) {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        const timer = setTimeout(() => {
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
                    setIsGoodWeather(data.isGoodWeather)
                } catch (error) {
                    console.error("There was an error: ", error);
                }
            } 
            fetchWeather();
        }, 5000);
        return () => clearTimeout(timer);
    }, [weather]);

    return (

        <div className="weather-container">
            <div className="weather-update">
                <p className={`weather-temperature weather-${isGoodWeather}`}>{weather.temperature}</p>
                <h1 className="weather-icon">{weather.condition}</h1>
            </div>
            {weather.isGoodWeather !== undefined &&
                (weather.isGoodWeather ? (
                    <h3 className={`weather-message weather-${isGoodWeather}`}>
                        Awesome weather! Let's go out and:
                    </h3>
                ) : (
                    <h3 className={`weather-message weather-${isGoodWeather}`}>
                        Bad weather outside. But we can:
                    </h3>
                ))}
        </div>
    );
}
