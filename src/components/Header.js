import React from "react";
import img from "../images/Troll Face.png"

export default function Header(){
    return(
        <div className="header">
            <img src={img} alt="troll" className="header--image"/>
            <h1 className="header--title">MEMEGENERATER</h1>
            <h4 className="header--project">React Cources - project3</h4>
        </div>
    )
}