import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import {Switch, Route} from "react-router-dom";

const App: React.FC = () => {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        </div>
    );
};

export default App;
