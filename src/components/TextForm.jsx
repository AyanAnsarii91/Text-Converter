import React, { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState("");

    const handleUpClicked = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleLowerClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    };
    const handleCopyToClipBoard = () => {
        navigator.clipboard.writeText(text);
        // setText(writeText);
    };

    const handleOnChange = (event) => {
        console.log("Changed: " + event.target.value);
        setText(event.target.value);
    };

    return (
        <>
            <div className="container">


                <div>
                    <h1>{props.heading}</h1>
                    <div className="form">
                        <textarea
                            value={text}
                            onChange={handleOnChange}
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea"
                            rows={10}
                            style={{ backgroundColor: props.mode === '' ? 'Dark' : 'Light' }}
                        > </textarea>
                        <label htmlFor="floatingTextarea">Comments</label>
                    </div>
                    <button className="btn btn-primary mt-3" onClick={handleUpClicked}>
                        Convert to Uppercase
                    </button>
                    <div>
                        <button className="btn btn-primary mt-3 my-2" onClick={handleLowerClick}>
                            Convert to lowercase
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-primary mt-3 my-2" onClick={handleClearClick}>
                            Clear Text
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-primary mt-3 my-2" onClick={handleCopyToClipBoard}>
                            Copy Text
                        </button>
                    </div>
                </div>

                <div className="container my-2">
                    <h1>Your text summary</h1>
                    <p> {text.split("").length} words {text.length} characters</p>
                    <p> {0.005 * text.split("").length} Minutes read</p>
                    <h3> Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>

    );
};
export default TextForm;
