
import React from 'react'
import { useState } from 'react'

const Alert = (props) => {


    const [background, setbackground] = useState("white")

    const handleOnChange = (event) => {
        const selectColor = event.target.value;
        document.body.style.backgroundColor = selectColor
        setbackground(selectColor);


    }


    return (
        <>
            {props.alert && (
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{props.alert.type}</strong>: {props.alert.msg}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}

            <div className="select-bg mt-3">
                <label htmlFor="select" className="form-label">Select Background</label>
                <select
                    onChange={handleOnChange}
                    name="select"
                    id="select"
                    className="form-select">
                    <option

                        value="Green">Green</option>
                    <option id='blue' value="Blue">Blue</option>
                    <option value="Red">Red</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Pink">Pink</option>
                    <option value="aqua">Aqua</option>
                    <option value="Orange">Orange</option>
                    <option value="Purple">Purple</option>
                    <option value="Teal">Teal</option>
                    <option value="Maroon">Maroon</option>
                    <option value="Navy">Navy</option>
                    <option value="Olive">Olive</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Coral">Coral</option>
                    <option value="Lime">Lime</option>
                    <option value="Indigo">Indigo</option>

                </select>
            </div>
        </>

    )
}


export default Alert
