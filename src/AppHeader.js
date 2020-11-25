import React, { useState } from 'react';
import './AppHeader.css'

const AppHeader = () => {

    const [foll, setFoll] = useState("1.3rem");
    const [fru, setFru] = useState("2rem");
    const [follB, setFollB] = useState("5px");
    const [fruB, setFruB] = useState("0px");

    const TFoll = () => {
        setFoll("2rem");
        setFru("1.3rem");
        setFollB("0px");
        setFruB("5px");
    };

    const TFru = () => {
        setFru("2rem");
        setFoll("1.3rem");
        setFollB("5px");
        setFruB("0px");
    }


    return (
        <div className = "appHeader__main">
            <div onClick = {TFoll} className = "following"> <h3 className = "headerButton1" style ={{fontSize : foll, bottom : follB}}>Following</h3></div>
            <div className = "perpendicular">|</div>
            <div onClick = {TFru} className = "for_you"><h3 className = "headerButton2" style ={{fontSize : fru , bottom: fruB}} >For You</h3></div>
        </div>
    )
}

export default AppHeader
