import React from 'react';
import {findAllByDisplayValue} from "@testing-library/react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {

       if (props.collapsed === true) {
           return (
               <div>
               <AccordionTitle title={props.titleValue}/>
               </div>
           )
       } else {
           return(
           <div>
               <AccordionTitle title={props.titleValue}/>
               <AccordionBody/>
           </div>
           )
       }
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3><b>-{props.title}-</b></h3>
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