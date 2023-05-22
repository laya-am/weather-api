import "./App.css";
import Activity from "./components/Activity";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { useState } from "react";

function App() {
    const [newActivity, setNewActivity] = useState();

    function handleForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData);
        event.target.reset();

        return formObject;
    }

    return (
        <div className="App">
            <Weather />
            <Activity />
            <Activity />
            <Form onForm={handleForm} />
        </div>
    );
}

export default App;
