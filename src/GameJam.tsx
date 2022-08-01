import React from 'react';
import './App.css';

function GameJam(props: any)
{
    const image = props.image;

    const link1 = props.link1;
    const linkName1 = props.linkName1;

    const link2 = props.link2;
    const linkName2 = props.linkName2;

    const link3 = props.link3;
    const linkName3 = props.linkName3;

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className={"EndeavorContentThumbLeftPanel"}>

                <div className={"BodyText"}>
                    <text>{props.description}</text>
                </div>

                <div className={"EndeavorDivider"}/>

                <text className={"BodyText"} style={{display: props.usedLanguage ? "flex" : "none"}}>Language: {props.usedLanguage}</text>
                <text className={"BodyText"} style={{display: props.usedEngine ? "flex" : "none"}}>Engine: {props.usedEngine}</text>

                <div className={"EndeavorDivider"} style={{display: props.usedLanguage || props.usedEngine ? "flex" : "none"}}/>

                <div className={"BodyText"}>
                    <div style={{marginBottom: 10}}>
                        <text>Jam: {props.jam}</text>
                    </div>
                    <div style={{marginBottom: 10}}>
                        <text>Theme: {props.theme}</text>
                    </div>
                    <div>
                        <text>Team: {props.team}</text>
                    </div>
                </div>

                <div className={"EndeavorDivider"}/>

                <button onClick={() => {window.open(link1)}} className={'EndeavorItemLink'} style={{display: link1 ? "flex" : "none"}}>
                    <text style={{color: "#42d4f5"}}>
                        {linkName1}
                    </text>
                </button>

                <button onClick={() => {window.open(link2)}} className={'EndeavorItemLink'} style={{display: link2 ? "flex" : "none"}}>
                    <text style={{color: "#42d4f5"}}>
                        {linkName2}
                    </text>
                </button>

                <button onClick={() => {window.open(link3)}} className={'EndeavorItemLink'} style={{display: link3 ? "flex" : "none"}}>
                    <text style={{color: "#42d4f5"}}>
                        {linkName3}
                    </text>
                </button>
            </div>
            <img src={image} alt="" className={'EndeavorItemThumb'} />
        </div>
    )
}

export default GameJam