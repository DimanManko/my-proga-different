import {useState} from "react";


export const ControlledInput = () => {
    const [value, setValue] = useState("")
    return (
        <div>
            <input onChange={(event)=>{const actualValue = event.currentTarget.value;
                setValue(actualValue);


            }}/>{value}
        </div>
    )
}