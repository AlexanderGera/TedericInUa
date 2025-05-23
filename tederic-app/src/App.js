
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";

import Home from "./Components/Pages/Home/Home";

import './App.css';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" exact element={<Home/>}/>
            </Routes>


        </div>
    );
}

export default App;
