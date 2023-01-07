import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case", "warning")
    }

    const handleDownClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case", "success")
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clip Board", "success")

    }

    const handleSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("All the Extra Space are Erased", "success")

    }

    const [text, setText] = useState('');


    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 >{props.h1}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert Uppercase</button>

                <button className='btn btn-primary mx-3' onClick={handleDownClick}>Convert Lowercase</button>

                <button className='btn btn-primary m-3' onClick={handleCopy}>Copy Text</button>

                <button className='btn btn-primary m-3' onClick={handleSpaces}>Remove Extra Space</button>

            </div>
            <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h2 className='my-3'>Your text summary</h2>
                <p> {text.split(" ").length} words and {text.length} characters</p>
                <p>It take {0.008 * text.split(" ").length} minute  to read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}
