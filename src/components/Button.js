import React from "react"
import classes from "./css/Button.module.css"

function Button({value, handler}) {
    return (
        <div className= {value == "C" || value == "=" ? `${classes.calBtns} ${classes.res}` : `${classes.calBtns}`} onClick={()=> handler(value)}>
            {value}
        </div>
    )
}

export default Button