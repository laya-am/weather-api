import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
// import { useState } from "react";

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

    const [isGoodWeather, setIsGoodWeather] = useState(true)

    function handleForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData);
        formObject.id = uid(5);
        setActivities([...activities, formObject]);
        event.target.reset();
    }

    const handleDeleteActivities = (id) => {
        console.log("deleting activity by id", id);

        setActivities(activities.filter((activity) => activity.id !== id));
        console.log("activities: ", activities);
    };

    return (
        <div className="App">
            <Weather setIsGoodWeather={setIsGoodWeather} />
            <List listClass="current-list"
                typeOfList= {isGoodWeather ? "good" : "bad"}
                activities={activities}
                onDelete={handleDeleteActivities}
            />
            <List listClass="second-list"
                typeOfList= {isGoodWeather ? "bad" : "good"}
                activities={activities}
                onDelete={handleDeleteActivities}
            />
            <Form onForm={handleForm} />
        </div>
    );
}

export default App;
