import "../css/projects.css"
import curaProject from '../images/CuraProject.svg'
import blueSquare from '../images/LeoProject.svg'
import algoVisualizer from '../images/Algo-Visualizer.svg'
import eventsPanel from '../images/EventsPanel.svg'
import classProfile from '../images/Syde26.svg'
import spaceInvaders from '../images/SpaceInvaders.svg'
import personalWebsite from '../images/PersonalWebsite.svg'
import link from '../images/link.png'
import github from '../images/github.png'
import close from '../images/close.png'
import { useState } from 'react'

const Projects = () => {

    const [hideDropdownInfo, setDropdownInfo] = useState(false);
    const [hideAlgoVisualizer, setAlgoVisualizer] = useState(false);
    const [hideEventsPanel, setEventsPanel] = useState(false);
    const [hideClassProfile, setClassProfile] = useState(false);
    const [hideSpaceInvaders, setSpaceInvaders] = useState(false);
    const [hideLeoWebsite, setLeoWebsite] = useState(false);
    const [hidePersonalWebsite, setPersonalWebsite] = useState(false);

    const ProjectInfo = [
        { description: "CuraEarth aims to provide users with eco-friendly activities based on the specific amount of time chosen. Created for SheHacks 2022.", 
        tools: "React, MongoDB, Express, Node, Figma", websiteLink: "https://phamkelly17.github.io/cura-earth/", githubLink: "https://github.com/lisazhao30/CuraEarth" },
        { description: "A web application that allows users to visually learn popular sorting algorithms.", 
        tools: "TypeScript, React, Styled Components", githubLink: "https://github.com/lisazhao30/Algorithm-Sorter"},
        { description: "A website that displays events from an API. Register and login to view special events. The website is hosted on Heroku.",
        tools: "React, MongoDB, Express, Node, Axios", websiteLink: "https://htn-frontend-submission.herokuapp.com/", githubLink: "https://github.com/lisazhao30/htn-frontend-submission"},
        { description: "Collaborated with a team of 7 to create the class profile for Systems Design Engineering class of 2026. Over 120+ daily users.",
        tools: "React, Sass", websiteLink: "https://syde26.life/", githubLink: "https://github.com/SYDE-26/1A-Class-Profile-Website"},
        { description: "Leo's mission is to provide users with a variety of vegan recipes with the ultimate goal of building a sustainable future.", 
        tools: "React, Figma", githubLink: "https://github.com/lisazhao30/React-Website"},
        { description: "For our SYDE-121 final project I worked in a team of 3 to recreate the Space Invaders game for the Visual Studio Code terminal.",
        tools: "C++", githubLink: "https://github.com/lisazhao30/Space-Invaders"},
        { description: "This personal website you're looking at! I refactored this website to make its components more efficient, maintainable, and reusable.",
        tools: "React, Material MUI", githubLink: "https://github.com/lisazhao30/lisazhao30.github.io"}
    ]
    //when using useState in onclick, you have to set onclick as a function with () => set(...)
    return (
        <div className = "masterDiv">
            <div className = "newGrid">
                <div className="leftColumn">
                    <div className={hideDropdownInfo ? "purpleSquare" : "photoSquare"}>
                        {hideDropdownInfo ? 
                            <div className="purpleSquare">
                                <button className="closeButton" onClick={() => setDropdownInfo(false)}>
                                    <img className="closeImage" src={close}/>
                                </button>
                                <h3>Summary</h3>
                                <p>{ProjectInfo[0].description}</p>
                                <h3>Developed With</h3>
                                <p>{ProjectInfo[0].tools}</p>
                                <h3>Check It Out!</h3>
                                <div className="links">
                                    <a href={ProjectInfo[0].websiteLink} target="_blank"><img className="linkImage" src={link}/></a>
                                    <a href={ProjectInfo[0].githubLink} target="_blank"><img className="githubImage" src={github}/></a>
                                </div>
                            </div> : <img className = "photoSquareTransform" src={curaProject} alt="Cura Earth" onClick={() => setDropdownInfo(true)}></img>}
                    </div>
                    <div className={hideEventsPanel ? "greenSquare" : "photoSquare"}>
                        {hideEventsPanel ?
                        <div className="greenSquare">
                            <button className="closeButton" onClick={() => setEventsPanel(false)}>
                                <img className="closeImage" src={close}/>
                            </button>
                            <h3>Summary</h3>
                            <p>{ProjectInfo[2].description}</p>
                            <h3>Developed With</h3>
                            <p>{ProjectInfo[2].tools}</p>
                            <h3>Check It Out!</h3>
                            <div className="links">
                                <a href={ProjectInfo[2].websiteLink} target="_blank"><img className="linkImage" src={link}/></a>
                                <a href={ProjectInfo[2].githubLink} target="_blank"><img className="githubImage" src={github}/></a>
                            </div>
                        </div> : <img className="photoSquareTransform" src={eventsPanel} alt="Events Panel" onClick={() => setEventsPanel(true)}/>
                        }
                    </div>
                    <div className = {hideSpaceInvaders ? "purpleSquare" : "photoSquare"}>
                        {hideSpaceInvaders ? <div className="purpleSquare">
                            <button className="closeButton" onClick={() => setSpaceInvaders(false)}>
                                <img className="closeImage" src={close}/>
                            </button>
                            <h3>Summary</h3>
                            <p>{ProjectInfo[5].description}</p>
                            <h3>Developed With</h3>
                            <p>{ProjectInfo[5].tools}</p>
                            <h3>Check It Out!</h3>
                            <div className="links">
                                <a href={ProjectInfo[5].githubLink} target="_blank"><img className="githubImage" src={github}/></a>
                            </div>
                        </div> : <img className = "photoSquareTransform" src={spaceInvaders} alt="Space Invaders" onClick={() => setSpaceInvaders(true)}></img>
                        }
                    </div>
                    <div className={hidePersonalWebsite ? "greenSquare" : "photoSquare"}>
                        {hidePersonalWebsite ? <div className="greenSquare">
                            <button className="closeButton" onClick={() => setPersonalWebsite(false)}>
                                <img className="closeImage" src={close}/>
                            </button>
                            <h3>Summary</h3>
                            <p>{ProjectInfo[6].description}</p>
                            <h3>Developed With</h3>
                            <p>{ProjectInfo[6].tools}</p>
                            <h3>Check It Out!</h3>
                            <div className="links">
                                <a href={ProjectInfo[6].githubLink} target="_blank"><img className="githubImage" src={github}/></a>
                            </div>
                        </div> : <img className="photoSquareTransform" src={personalWebsite} alt="Personal Website" onClick={() => setPersonalWebsite(true)}/>
                        }
                    </div>
                </div>
                <div className="rightColumn">
                    <div className={hideAlgoVisualizer ? "blueSquare" : "photoSquare"}> 
                        {hideAlgoVisualizer ? <div className="blueSquare">
                            <button className="closeButton" onClick={() => setAlgoVisualizer(false)}>
                                <img className="closeImage" src={close}/>
                            </button>
                            <h3>Summary</h3>
                            <p>{ProjectInfo[1].description}</p>
                            <h3>Developed With</h3>
                            <p>{ProjectInfo[1].tools}</p>
                            <h3>Check It Out!</h3>
                            <div className="links">
                                <a href={ProjectInfo[1].githubLink} target="_blank"><img className="githubImage" src={github}/></a>
                            </div>
                        </div> : <img className="photoSquareTransform" src={algoVisualizer} alt="Algorithm Visualizer" onClick={() => setAlgoVisualizer(true)}/>}
                    </div>
                    <div className={hideClassProfile ? "pinkSquare" : "photoSquare"}>
                        {hideClassProfile ?
                            <div className="pinkSquare">
                                <button className="closeButton" onClick={() => setClassProfile(false)}>
                                    <img className="closeImage" src={close}/>
                                </button>
                                <h3>Summary</h3>
                                <p>{ProjectInfo[3].description}</p>
                                <h3>Developed With</h3>
                                <p>{ProjectInfo[3].tools}</p>
                                <h3>Check It Out!</h3>
                                <div className="links">
                                    <a href={ProjectInfo[3].websiteLink} target="_blank"><img className="linkImage" src={link}/></a>
                                    <a href={ProjectInfo[3].githubLink} target="_blank"><img className="githubImage" src={github}/></a>
                                </div>
                            </div> : <img className="photoSquareTransform" src={classProfile} alt="Class Profile" onClick={() => setClassProfile(true)}/>
                        }
                    </div>
                    <div className={hideLeoWebsite ? "blueSquare" : "photoSquare"}>
                        {hideLeoWebsite ? <div className="blueSquare">
                            <button className="closeButton" onClick={() => setLeoWebsite(false)}>
                                <img className="closeImage" src={close}/>
                            </button>
                            <h3>Summary</h3>
                            <p>{ProjectInfo[4].description}</p>
                            <h3>Developed With</h3>
                            <p>{ProjectInfo[4].tools}</p>
                            <h3>Check It Out!</h3>
                            <div className="links">
                                <a href={ProjectInfo[4].githubLink} target="_blank"><img className="githubImage" src={github}/></a>
                            </div>
                        </div> : <img className = "photoSquareTransform" src={blueSquare} alt="Leo Project" onClick={() => setLeoWebsite(true)}/>}
                    </div>
                </div>
            </div>
            <div className = "infoText">
                <p>Click on the project images to view the description!</p>
            </div>
        </div>
    )
}

export default Projects