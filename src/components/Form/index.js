import "./Form.css"

export default function Form({ onForm }) {
    return (
        <form onSubmit={onForm} className="form">
            <label htmlFor="newActivity" className="input-label"><strong>Add a new Activity:</strong></label>
            <input type="text" name="newActivity" id="newActivity" className="input" />
            <div className="radio">
                <input
                    type="radio"
                    id="good"
                    value="good"
                    name="typeOfWeather" 
                />
                <label htmlFor="good">Good Weather</label>
            </div>
            <div className="radio">
                <input type="radio" id="bad" value="bad" name="typeOfWeather" />
                <label htmlFor="bad">Bad Weather</label>
            </div>
            <button className="button-submit" type="submit">Submit</button>
        </form>
    );
}
