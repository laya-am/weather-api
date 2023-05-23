import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
    const [activities, setActivities] = useLocalStorageState("activities",{defaultValue:[
        {newActivity: "read a book",
        typeOfWeather: "bad",
        id: 10000
        },
        {newActivity: "binge-watch your favourite series",
        typeOfWeather: "bad",
        id: 10001
        },
        {newActivity: "play beach volleyball",
        typeOfWeather: "good",
        id: 10002
        },

    ]});

    function handleForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData);
        formObject.id = uid(5);
        setActivities([...activities, formObject]);
        event.target.reset();
        // return activities;
    }

    return (
        <div className="App">
            <Weather />
            <List typeOfList="good" activities={activities} />
            <List typeOfList="bad" activities={activities} />
            <Form onForm={handleForm} />
        </div>
    );
}

export default App;
