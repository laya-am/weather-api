import { useState, useEffect } from "react";

export default function Weather() {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        const timer= setTimeout(() => {

            async function fetchWeather() {
                try {
                    const response = await fetch(
                        `https://example-apis.vercel.app/api/weather`
                    );
                    const data = await response.json();
                    console.log(data);
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
            console.log("new data was fetched in timeout");
        }, 5000)
        return () => clearTimeout(timer);
    }, [weather]);

    return (
        <>
            <p>{weather.temperature}</p>
            <p>{weather.condition}</p>
            {weather.isGoodWeather !== undefined && (weather.isGoodWeather ? <h3>Awesome weather! Let's go out and:</h3> : <h3>Bad weather outside. But we can:</h3>)}
            {/* {weather.isGoodWeather ? <h3>Awesome weather! Let's go out and:</h3> : <h3>Bad weather outside. But we can:</h3>} */}
        </>
    );
}
