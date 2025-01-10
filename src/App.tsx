import React, {useState} from 'react';
import './App.css';
import {Rating, ratingValueType} from "./Rating/Rating";
import {Accordion} from "./Accordion/Accordion";
import {ControlledInput} from "./ControlledInput/ControlledInput";
import {ControlledCheckbox} from "./ControlledCheckbox/ControlledCheckbox";


function App() {

    let [ratingValue, setratingValue] = useState<ratingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div className="App">
            <Rating value={ratingValue} onClick={setratingValue}/>
            {/*<Accordion titleValue={"Menu"}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange = {()=>{setAccordionCollapsed (!accordionCollapsed)}}/>*/}
            <ControlledInput/>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <ControlledCheckbox/>
        </div>
    );
}

export default App;