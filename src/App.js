import "./App.css";
import Activity from "./components/List";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
    const [activities, setActivities] = useLocalStorageState("activities",{defaultValue:[]});

    function handleForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData);
        formObject.id = uid();
        setActivities([...activities, formObject]);
        event.target.reset();
        // return activities;
    }

    return (
        <div className="App">
            <Weather />
            <Activity typeOfList="good" activities={activities} />
            <Activity typeOfList="bad" activities={activities} />
            <Form onForm={handleForm} />
        </div>
    );
}

export default App;
