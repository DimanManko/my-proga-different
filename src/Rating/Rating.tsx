import React from 'react';

export type ratingValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    value: ratingValueType
    onClick: (value:ratingValueType)=>void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}
type StarPropsType = {
    selected: boolean
    onClick: (value:ratingValueType)=>void
    value: ratingValueType
}
function Star (props: StarPropsType) {
    console.log("Начало")
    return <span onClick={ () => { props.onClick(props.value) }}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}