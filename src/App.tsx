import React from 'react';
import './App.css';
import {LoginPage} from "./Props/Login";
import {HW3} from "./HW3/HW3";
import {Counter} from "./Counter/Counter";


function App() {
    return (
        <div className="App">
            {/*{< LoginPage/>}*/}
            {/*{<HW3/>}*/}
            <Counter/>
        </div>
    );
}

export default App;