import {useState} from "react";

export const Counter = () => {

    const [value, setValue] = useState(0);

    const incHandler = () => {
        setValue(value + 1);
    }

    const setLocalStorageHandler = () => {
        localStorage.setItem("counterValue", JSON.stringify(value));
    }

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString);
            setValue(newValue);
        }
    }

    return (
        <div className="">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setLocalStorageHandler}>setLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
        </div>
    )
}