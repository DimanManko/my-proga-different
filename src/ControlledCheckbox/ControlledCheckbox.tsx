import {ChangeEvent, useState} from "react";


export const ControlledCheckbox = () => {
    const [parentvalue, setParentValue] = useState(true)

    const onChange= (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <div>
            <input type="checkbox" checked={parentvalue} onChange={onChange}/>
        </div>
    )
}