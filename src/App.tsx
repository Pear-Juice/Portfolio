import React from 'react';
import './App.css';
import CustomAccordionItem from "./CustomAccordionItem";
import './AccordionStyle.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import GameJam from "./GameJam";


import zipClickThumb from './Photos/Thumbnails/ZipClick.png'
import Project from "./Project";



function App() {
  return (
    <div>
        <div className={'Background'}>
            <div className={'AboutPanel'}>
                <div className={'ProfilePicture'}/>
                <text className={'MainPanelTitleText'}>Pear Juice</text>
                <div className={"BodyText"} style={{flexDirection: 'column'}}>
                    <text>My interest in computer science began in 2019 with coursesFirst c in robotics and Java. At the same time Minecraft sparked my interest when I discovered how to create minigames with command blocks and server plugins. In the last few years I've been privileged to count engineers from Amazon and Up A Creek Robotics. I am grateful for the knowledge and support they continue to donate. </text>
                    <div style={{height: 20}}></div>
                    <text>When I am not coding I can be found in the mountains skiing, biking, and bouldering. I also volunteer for community projects with Up A Creek Robotics and the National Honors Society.</text>
                </div>
                <div className={"SkiingPicture"}/>
                <div style={{textAlign: 'center', margin: 10}}>
                    <text className={"BodyText"}>Mammoth Mtn, 2019</text>
                </div>
                <div className={"TrampolinePicture"}/>
                <div style={{textAlign: 'center', margin: 10}}>
                    <text className={"BodyText"}>San Francisco, 2018</text>
                </div>
            </div>
            <div className={'EndeavorContainer'}>
                <div className={'Endeavor'}>
                    <text className={'EndeavorTitleText'}>Personal Projects</text>
                    <Accordion className={'accordion'} allowZeroExpanded>
                        <CustomAccordionItem header={"Planet Generation"} date={"In Progress"}>
                            <Project
                                image={require("./Photos/Thumbnails/Space.png")}
                                description={"A system with the ability to generate custom planets with 256 levels of detail. It features custom shaders for planet shading, atmospheres (WIP), and oceans (WIP) with a noise layering system for planet shapes"}
                                usedLanguage={"C#, ShaderGraph, ShaderLab"}
                                usedEngine={"Unity"}

                                link1={"https://github.com/Pear-Juice/Space-V3"}
                                linkName1={"GitHub"}
                                // download={require("./Project Builds/Space V3.zip")}
                                usedSources={[
                                    "GitHub: SebLague/Solar-System",
                                    "GitHub: JimmyCushnie/Noisy-Nodes",
                                    "YouTube: Martin Donald, Planet atmospheres, Ray-sphere intersections."
                                ]}
                            />
                        </CustomAccordionItem>
                        <CustomAccordionItem header="Marching Cubes" date="Nov 14, 2021">
                            <Project
                                image={require("./Photos/Thumbnails/Marching Cubes.png")}
                                description={"Minecraft has a system that lets you shape a world to your imagination. However, its voxel system is limited to cubes. I wanted to design something that could make any shape which lead me to the marching cubes algorithm."}
                                usedLanguage={"C#"}
                                usedEngine={"Unity"}
                                link1={"https://github.com/Pear-Juice/MarchingCubes"}
                                linkName1={"GitHub"}
                                usedSources={[
                                    "GitHub: SebLague/Marching-Cubes",
                                    "GitHub: Scrawk/MarchingCubes",
                                    "Wikipedia: Marching cubes"
                                ]}
                            />
                        </CustomAccordionItem>
                        <CustomAccordionItem header="Chess" date={"Sep 22, 2021"}>
                            <Project
                                image={require("./Photos/Thumbnails/Chess.png")}
                                description={"A simple chess application. I love chess and I found it fun to explore the simulations aspects of the game"}
                                usedLanguage={"Java"}
                                usedEngine={"Processing"}
                                link1={"https://github.com/Pear-Juice/Chess"}
                                linkName1={"GitHub"}
                                download={require("./Project Builds/Chess.zip")}
                            />
                        </CustomAccordionItem>
                        <CustomAccordionItem header="Marching Squares" date="Sep 18, 2021">
                            <Project
                                image={require("./Photos/Thumbnails/MarchingSquaresGif.gif")}
                                description={"A simple algorithm that draws a contour around an area. This generates its area using by sampling a 3D Simplex noise function and taking a cross section"}
                                usedLanguage={"Java"}
                                usedEngine={"Processing"}
                                link1={"https://github.com/Pear-Juice/MarchingSquares"}
                                linkName1={"GitHub"}
                                // download={require("./Project Builds/MarchingSquares.zip")}
                                usedSources={[
                                    "YouTube: The Coding Train, Coding in the Cabana 5: Marching Squares"
                                ]}
                            />
                        </CustomAccordionItem>
                        <CustomAccordionItem header="Spider (Applied Inverse Kinematics)" date="March 3, 2021">
                            <Project
                                image={require("./Photos/Thumbnails/Spider.gif")}
                                description={"The goal of this project was to create a creature using procedural animation. One of the biggest challenges was getting the creature to rotate towards the wall"}
                                usedLanguage={"C#"}
                                usedEngine={"Unity"}
                                // download={require("./Project Builds/Spider.zip")}
                                link1={"https://github.com/Pear-Juice/Spider"}
                                linkName1={"GitHub"}
                                usedSources={[
                                    "YouTube: Sebastian Lague, Coding Adventure: Game Idea Generator",
                                    "YouTube: Codeer, Unity procedural animation tutorial (10 steps)"
                                ]}
                            />
                        </CustomAccordionItem>
                    </Accordion>
                </div>
                <div className={'Endeavor'}>
                    <text className={'EndeavorTitleText'}>Client Projects</text>
                    <Accordion className={"accordion"} allowZeroExpanded>
                        <CustomAccordionItem header={"Trampoline Team Skill Tracker"}>
                            <Project
                                image={require("./Photos/Thumbnails/SkillTracker.png")}
                                description={"David Ford, a USA gymnastics national team coach approached me about the creation of an app to track trampoline skills. He wanted to know if I could create a brand new app to help his team track skills, calculate difficulty and combine skill difficulties for the design of new routines. I was excited by this challenge and developed this app."}
                                usedLanguage={"C#"}
                                usedEngine={"Unity"}
                                download={require("./Project Builds/SkillTracker.zip")}
                                developer={"Pear Juice"}
                            />
                        </CustomAccordionItem>
                        <CustomAccordionItem header={"Chemelian LLC Website"}>
                            <Project
                                image={require("./Photos/Thumbnails/Chemelian.png")}
                                description={"Created the website design and structure for Chemelian LLC"}
                                link1={"https://www.chemelian.com/"}
                                linkName1={"Website"}
                                developer={"Pear Juice"}
                            />
                        </CustomAccordionItem>
                    </Accordion>
                </div>
                <div className={'Endeavor'}>
                    <text className={'EndeavorTitleText'}>Game Jams</text>
                    <Accordion className={'accordion'} allowZeroExpanded>
                        <CustomAccordionItem header="ZipClick" date="Jun 10, 2022">
                            <GameJam
                                image={require("./Photos/Thumbnails/ZipClick.png")}
                                description="A puzzle game where you play as an electrician to restore power through a series of puzzles. Connect wires to unlock doors, new rooms, and more."
                                jam={"Lost Relic Game Jam"}
                                theme={"Connections"}
                                team="PearJuice (Programmer) | FlickrAV (Level Designer) | hypercat (Programmer / Pixel Artist) | FlopSquad (Song Mixer, Sound Designer) | Globalmicroscope (Composer)"
                                usedLanguage={"GDScript"}
                                usedEngine={"Godot"}
                                link1={"https://pearjuice.itch.io/zipclick"}
                                linkName1={"Itch.io"}
                                link2={"https://github.com/Pear-Juice/LostRelicGameJam"}
                                linkName2={"GitHub"}
                            />

                        </CustomAccordionItem>
                        <CustomAccordionItem header="Ball & Chain & Square" date="Jun 13, 2021">
                            <GameJam
                                image={require("./Photos/Thumbnails/BallChainSquare.png")} d
                                description="A 2D platformer where you play as a square."
                                usedLanguage={"C#"}
                                usedEngine={"Unity"}
                                jam={"GMTK Game Jam"}
                                theme={"Joined Together"}
                                team="PearJuice (Programmer) FlickrAV | (Level Designer)"
                                link1={"https://flickrav.itch.io/ball-chain-square"}
                                linkName1={"Itch.io"}
                            />
                        </CustomAccordionItem>
                        <CustomAccordionItem header="School Time Scuffle" date="Feb 21, 2021">
                            <GameJam
                                image={require("./Photos/Thumbnails/School Time Scuffle.png")}
                                description="Go through a regular day in a senior highschooler's life"
                                usedLanguage={"C#"}
                                usedEngine={"Unity"}
                                jam={"Brackeys Game Jam"}
                                theme={"Stronger Together"}
                                team="PearJuice (Pixel Artist) | FlickrAV (Programmer / Level Designer) | hypercat (Programmer) | ZSOTS (Sound Designer)"
                                link1={"https://flickrav.itch.io/schooltimescuffle"}
                                linkName1={"Itch.io"}
                                link2={"https://github.com/Pear-Juice/Brackeys2021WinterEdition"}
                                linkName2={"GitHub"}
                            />

                        </CustomAccordionItem>
                        <CustomAccordionItem header="Rooftop Rythm" date="Nov 15, 2020">
                            <GameJam
                                image={require("./Photos/Thumbnails/Rooftop Rythm.jpg")}
                                description="A 2D platformer where you have to avoid the pigeon spikes and snipers while dancing to the beat."
                                usedLanguage={"C#"}
                                usedEngine={"Unity"}
                                jam={"Mix and Game Jam"}
                                theme={"Mixing Genres"}
                                team="PearJuice (Programmer) | FlickrAV (Programmer)"
                                link1={"https://pearjuice.itch.io/rooftop-rythm"}
                                linkName1={"Itch.io"}
                            />

                        </CustomAccordionItem>
                        <CustomAccordionItem header="Grapple" date="Jul 12, 2020">
                            <GameJam
                                image={require("./Photos/Thumbnails/Grapple.png")}
                                description="A shoot to move, grappling top down action game set in an office. In order to survive you must fight out of control water coolers, staplers, and more."
                                usedLanguage={"C#"}
                                usedEngine={"Unity"}
                                jam={"GMTK Game Jam"}
                                theme={"Out of Control"}
                                team="PearJuice (Programmer) | QuestCake (Programmer / Git Specialist) | Sushant dua (Pixel Artist) | Filto (Pixel Artist) | hypercat (Programmer) | pawng (Musician) | FlickrAV (Programmer) | ZSOTS (Sound Designer)"
                                link1={"https://questcake.itch.io/grapple/"}
                                linkName1={"Itch.io"}
                            />

                        </CustomAccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App;
