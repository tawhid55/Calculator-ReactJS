import React from "react"
import classes from "./css/Home.module.css"
import Demo from "./Demo"
import Button from "./Button"

function Home() {

    const buttons = ["C","9","/","8","7","6","*","5","4","3","+","2","1","0","-",".","Del","="];

    return(
        <div className={classes.home}>
            <div className={classes.inner}>
                <div className={classes.result}>
                    <div className={classes.resbox}></div>
                </div>
                <div className={classes.btns}>
                    {buttons.map((elem,index) => {return <Button value={elem} key={index} />})}
                </div>
            </div>
            
        </div>
    )
}

export default Home