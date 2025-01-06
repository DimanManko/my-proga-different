import React from 'react';
import {findAllByDisplayValue} from "@testing-library/react";

type AccordionPropsType = {
    title: string;
    collapsed: (value:boolean)=>void
    value: boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} collapsed={props.collapsed} value={false} />
            <AccordionBody/>
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: (value: boolean)=> void
    value: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => {props.collapsed(props.value)}}><b>--{props.title}--</b>
    {props.collapsed() ? props.title : props.title && <AccordionBody/> }
    </h3>
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