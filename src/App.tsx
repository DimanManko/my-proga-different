import React, {useState} from 'react';
import './App.css';
import {LoginPage} from "./Props/Login";
import {HW3} from "./HW3/HW3";
import {Counter} from "./Counter/Counter";
import {Accordion} from "./Accordion/Accordion";
import {Rating} from "./Rating/Rating";


function App() {


    return (
        <div className="App">
            {/*{< LoginPage/>}*/}
            {/*{<HW3/>}*/}
            {/*<Counter/>*/}
            <input type="date"/>
            <Accordion titleValue = {"Menu"} collapsed = {true}/>
            <Accordion titleValue = {"User"} collapsed = {false}/>
            {/*<Rating value = {1}/>*/}
        </div>
    );
}

export default App;