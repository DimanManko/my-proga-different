import React, {useState} from 'react';
import './App.css';
import {Rating, ratingValueType} from "./Rating";
import {Accordion} from "./Accordion";
import {ControlledInput} from "./ControlledInput";


function App() {

    let [ratingValue, setratingValue] = useState<ratingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div className="App">
            <Rating value={ratingValue} onClick={setratingValue}/>
            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange = {()=>{setAccordionCollapsed (!accordionCollapsed)}}/>
            <ControlledInput/>
        </div>
    );
}

export default App;