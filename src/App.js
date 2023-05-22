import "./App.css";
import Activity from "./components/Activity";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
    return (
    <div className="App">
        <Weather />
        <Activity />
        <Activity />
        <Form />
    </div>);
}

export default App;
