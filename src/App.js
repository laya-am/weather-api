import "./App.css";
import Activity from "./components/List";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { useState } from "react";
import { uid } from "uid";

function App() {
    const [activities, setActivities] = useState([]);

    function handleForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData);
        formObject.id = uid();
        console.log(formObject);
        setActivities([...activities, formObject]);
        console.log(activities);
        event.target.reset();

        return formObject;
    }

    return (
        <div className="App">
            <Weather />
            <Activity typeOfList="good" />
            <Activity />
            <Form onForm={handleForm} />
        </div>
    );
}

export default App;
