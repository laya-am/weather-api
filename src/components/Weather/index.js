import { useState, useEffect } from "react";

export default function Weather() {
    const [weather, setWeather] = useState({});

    useEffect(() => {
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
                });
                console.log("weather: ", weather);
            } catch (error) {
                console.error(error);
            }
        }
        fetchWeather();
    }, []);

    return (
        <>
            <p>{weather.temperature}</p>
            <p>{weather.condition}</p>
        </>
    );
}
