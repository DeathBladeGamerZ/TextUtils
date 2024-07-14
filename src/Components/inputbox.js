import React, { useState } from "react";
export default function InputBox(props) {

    const [text,setText]=useState("");

    const toUpperCase = ()=>{
        let t = text.toUpperCase();
        setText(t);
        props.showAlert("Success","Converted to Upper Case");
    }

    const toLowerCase = () =>{
        let t = text.toLowerCase();
        setText(t);
        props.showAlert("Success","Converted to Lower Case");
    }

    const handleonchange=(event)=> {
        setText(event.target.value);
    }

    const revspace = () => {
        let ws = text.replace(/\s+/g,' ').trim();
        setText(ws);
        props.showAlert("Success","Removed Extra Spaces");
    }

    const Clear = () =>{
        setText("");
        props.showAlert("Danger","Text Cleared");
    }
    return(
        <>
        <div className="inptbox">
            <h2>Enter Your Text Here</h2>
            <textarea className="inpuText" value={text} onChange={handleonchange} rows="6" cols = "77"></textarea>
        </div>
        <div className="btns">
        <button className={`btn-${props.mode}`} onClick={toUpperCase}>UpperCase</button>
        <button className= {`btn-${props.mode}`} onClick={toLowerCase}>LowerCase</button>
        <button className= {`btn-${props.mode}`} onClick={revspace}>Remove Extra Spaces</button>
        <button className= {`btn-${props.mode}`} onClick={Clear}>Clear</button>
        </div>
        <div className="summery">
            <h3>Summery</h3>
            <p>{text.split(" ").filter((element) => {return element.length !==0}).length} Words and {text.length} Charecters</p>
            <p>{parseInt(0.2*(text.split(' ').length))} Minute(s) read</p>
        </div>
        </>
    )
}