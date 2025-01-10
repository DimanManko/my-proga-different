import React, {useState} from 'react';
import {Accordion} from "./Accordion";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion (props: AccordionPropsType) {
    let [collsapsed, setCollapsed] = useState(false);
    return <div>
        <AccordionTitle title = {props.titleValue} onClick = {()=>{setCollapsed(!collsapsed)}}/>
        {!collsapsed && <AccordionBody/>}
    </div>
}
type AccordionTitlePropsType = {
    title: string
    onClick: ()=> void
}
function AccordionTitle (props: AccordionTitlePropsType) {
    return(
        <h3 onClick={ ()=>{props.onClick()} }>---{props.title}--- </h3>
    )
}
function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
        </ul>
    )
}