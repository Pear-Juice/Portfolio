import React from 'react';
import './App.css';

function download(fileUrl: string) {
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", getFileName(fileUrl));
    a.click();
}

function getFileName(fileUrl: string)
{
    var splitFileName = fileUrl.split('/');
    var fileName = splitFileName[splitFileName.length - 1];

    return fileName;
}

function Project(props: any)
{
    const link1 = props.link1;
    const linkName1 = props.linkName1;

    const link2 = props.link2;
    const linkName2 = props.linkName2;

    const link3 = props.link3;
    const linkName3 = props.linkName3;

    let developerText : string;
    let developerString : string = props.developer;

    var usedSources : string[] = props.usedSources;

    if (!usedSources)
        usedSources = []

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

                <div style={{display: props.developer ? 'flex' : 'none', flexDirection: 'column'}} className={"BodyText"}>
                    <text>{developerString ? developerString.split(',').length > 1 ? "Developers" : "Developer" : ""}: {props.developer}</text>
                    <div className={"EndeavorDivider"}/>
                </div>

                <text className={"BodyText"} style={{display: usedSources.length > 0 ? "flex" : "none"}}>Sources: </text>

                <div>
                    {usedSources.map((val) =>
                        <div>
                            <text className={"BodyText"}>
                                {val}
                            </text>
                        </div>
                    )}
                </div>

                <div className={"EndeavorDivider"} style={{display: usedSources.length > 0 ? "flex" : "none"}}/>

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

                <button className={"EndeavorItemLink"} onClick={() => {download(props.download)}} style={{display: props.download ? "flex" : "none"}}>
                    <text style={{color: "#ff8e54"}}>
                        Download
                    </text>
                </button>
            </div>
            <img src={props.image} alt="" className={'EndeavorItemThumb'} />
        </div>
    )
}

export default Project