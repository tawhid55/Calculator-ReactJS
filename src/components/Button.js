import React from "react"
import classes from "./css/Button.module.css"

function Button({value}) {
    return (
        <div className={classes.calBtns}>
            {value}
        </div>
    )
}

export default Button