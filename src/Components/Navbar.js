import React from "react"

export default function Navbar(props){
    return(
        <div className={`Nav-${props.mode}`}>
            <h1><i>TextUtils</i></h1>
            <ul className="Items">
                <a herf ="#"><ul>Home</ul></a>
                <a herf =".about"><ul>About</ul></a>
            </ul>
           <div className="togglemode">
            <input type="checkbox" id="switch" onClick={props.toggleMode}></input>
            <label htmlFor ="switch">Toggle</label>
            </div>
           </div>
    )
}