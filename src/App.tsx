import React, {useState} from 'react';
import './App.css';
import {Rating, ratingValueType} from "./Rating";
import {Accordion} from "./Accordion";


function App() {

    let [ratingValue, setratingValue] = useState<ratingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div className="App">
            <Rating value={ratingValue} onClick={setratingValue}/>
            <Accordion title={"Menu"} collapsed={setAccordionCollapsed} value={accordionCollapsed}/>
        </div>
    );
}

export default App;