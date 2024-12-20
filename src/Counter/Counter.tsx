import {useState} from "react";

export const Counter = () => {

    const [value, setValue] = useState(0);

    const incHandler = () => {
        setValue(value + 1);
    }

    const setLocalStorageHandler = () => {
        localStorage.setItem("counterValue", JSON.stringify(value));
        localStorage.setItem("counterValue + 1", JSON.stringify(value + 1));
    }

    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString);
            setValue(newValue);
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear();
        setValue(0);
    }
    const removeItemLocalStorageHandler = () => {
        localStorage.removeItem("counterValue + 1")
    }

    return (
        <div className="">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setLocalStorageHandler}>setLocalStorage</button>
            <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={removeItemLocalStorageHandler}>removeItemLocalStorage</button>
        </div>
    )
}