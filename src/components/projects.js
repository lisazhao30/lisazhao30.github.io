import "../css/projects.css"
import purpleSquare from '../images/CuraProject.svg'
import blueSquare from '../images/LeoProject.svg'
import greenSquare from '../images/SpaceInvadersProject.svg'
import pinkSquare from '../images/Pink.svg'
import purple from '../images/Purple.svg'
import blue from '../images/Blue.svg'
import green from '../images/Green.svg'
import github from '../images/github.png'
import link from '../images/link.png'
import { useState } from 'react'

const Projects = () => {

    const [hideDropdownInfo, setDropdownInfo] = useState(false);
    const onClick = () => {
        if (hideDropdownInfo === false) {
            setDropdownInfo(true)
        }
        else {
            setDropdownInfo(false)
        }
    }

    const [hideSquare2Info, setSquare2Info] = useState(false);
    const square2 = () => {
        if (hideSquare2Info === false) {
            setSquare2Info(true)
        }
        else {
            setSquare2Info(false)
        }
    }

    const [hideSquare3Info, setSquare3Info] = useState(false);
    const square3 = () => {
        if (hideSquare3Info === false) {
            setSquare3Info(true)
        }
        else {
            setSquare3Info(false)
        }
    }

    const DropdownInfo = () => {
        return (
        <div className = "square1Replacement" onClick = {onClick}>
            {hideDropdownInfo === true}
            <img src = {purple} alt="Purple Square"></img>
            <div className = "square1Replacement-text">
                <h3>Summary</h3>
                <p>CuraEarth aims to provide users with eco-friendly activities based on the specific amount of time chosen.
                    Created for SheHacks 2022.
                </p>
                <h3>Developed With</h3>
                <p>React, MongoDB, Express, Node, Figma</p>
                <h3>Check It Out!</h3>
                <div className = "square1Replacement-images">
                    <a href = "https://phamkelly17.github.io/cura-earth/" target="_blank"><img className = "linkImage" src={link}></img></a>
                    <a href = "https://github.com/lisazhao30" target="_blank"><img className = "githubImage" src={github}></img></a>
                </div>
            </div>
        </div>
        )
    }

    const Square2Info = () => {
        return (
        <div className = "square2Replacement" onClick = {square2}>
            {hideSquare2Info === true}
            <img src = {blue} alt="Blue Square"></img>
            <div className = "square2Replacement-text">
                <h3>Summary</h3>
                <p>Leo's mission is to provide users with a variety of vegan recipes with the ultimate goal of 
                    building a sustainable future.
                </p>
                <h3>Developed With</h3>
                <p>React, Figma</p>
                <h3>Check It Out!</h3>
                <div className = "square2Replacement-images">
                    <a href = "https://phamkelly17.github.io/cura-earth/" target="_blank"><img className = "linkImage" src={link}></img></a>
                    <a href = "https://github.com/lisazhao30" target="_blank"><img className = "githubImage" src={github}></img></a>
                </div>
            </div>
        </div>
        )
    }

    const Square3Info = () => {
        return (
        <div className = "square3Replacement" onClick = {square3}>
            {hideSquare3Info === true}
            <img src = {green} alt="Green Square"></img>
            <div className = "square3Replacement-text">
                <h3>Summary</h3>
                <p>For our SYDE-121 final project I worked in a team of 3 to recreate the Space Invaders 
                    game for the Visual Studio Code terminal.
                </p>
                <h3>Developed With</h3>
                <p>C++</p>
                <h3>Check It Out!</h3>
                <div className = "square3Replacement-images">
                    <a href = "https://phamkelly17.github.io/cura-earth/" target="_blank"><img className = "linkImage" src={link}></img></a>
                    <a href = "https://github.com/lisazhao30/Space-Invaders" target="_blank"><img className = "githubImage" src={github}></img></a>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div className = "masterDiv">
            <div className = "grid">
                <div className ="square1">
                    <img className = "square1Transform" src={purpleSquare} alt="Cura Earth" onClick = {onClick}></img>
                    {hideDropdownInfo ? <DropdownInfo /> : null}
                </div>
                <div className = "square2">
                    <img className = "square2Transform" src={blueSquare} alt="Leo Project" onClick = {square2}></img>
                    {hideSquare2Info ? <Square2Info /> : null}
                </div>
                <div className = "square3">
                    <img className = "square3Transform" src={greenSquare} alt="Space Invaders" onClick = {square3}></img>
                    {hideSquare3Info ? <Square3Info /> : null}
                </div>
                <div className = "square4">
                    <img className = "squareTransform" src={pinkSquare}></img>     
                </div>
            </div>
            <div className = "infoText">
                <p>Click on the project images to view the description!</p>
            </div>
        </div>
    )
}

export default Projects