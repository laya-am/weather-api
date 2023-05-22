

export default function Form(){
    return (
        <form>
            <label htmlFor="newActivity">Add a new Activity:</label>
            <input type="text" name="newActivity" id="newActivity" />
            <div>
                <input type="radio" id="good" value="good" name="typeOfWeather" />
                <label htmlFor="good">Good Weather</label>
            </div>
            <div>
                <input type="radio" id="bad" value="bad" name="typeOfWeather" />
                <label htmlFor="bad">Bad Weather</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}