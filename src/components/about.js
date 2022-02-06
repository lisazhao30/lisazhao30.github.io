import "../css/about.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import email from '../images/arroba.png'

//when you use useState, make sure to capitalize the components (About)

const About = () => { //gonna comment the fuck outta this
    /*const [hideDropdownInfo, setDropdownInfo] = useState(false);
    const onClick = () => {
        if (hideDropdownInfo === false) {
            setDropdownInfo(true)
        }
        else {
            setDropdownInfo(false)
        }
    }*/

    const StyledAccordion = styled(Accordion)({
        width: '67vw',
        color: '#FFFFFF',
    });

    const HeaderTypography = styled(Typography)({
        fontFamily: 'Ubuntu',
        fontStyle: 'italic',
        fontWeight: 700,
        fontSize: 30,
    });

    const SubHeaderTypography = styled(Typography)({
        fontFamily: 'Ubuntu',
        fontWeight: 700,
        fontSize: 25,
    });

    const ParagraphTypography = styled(Typography)({
        fontFamily: 'Ubuntu',
        fontWeight: 500,
        fontSize: 20,
    });

    const StyledIcon = styled(ExpandMoreIcon)({
        color: '#FFFFFF',
    });

    return (
        <div className = "important">
            <div className = "accordion">
                <StyledAccordion
                sx ={{
                    backgroundColor: '#847E89',
                }}>
                    <AccordionSummary
                    expandIcon={<StyledIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx = {{
                        borderRadius: 1,
                        '&:hover': {
                            backgroundColor: '#232428',
                            borderRadius: 1,
                            color: '#847E89',
                        }
                    }}
                    >
                        <HeaderTypography>Skills</HeaderTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SubHeaderTypography>
                            Languages
                        </SubHeaderTypography>
                        <ParagraphTypography>
                            Python, Javascript, C++, HTML/CSS
                        </ParagraphTypography>
                        <SubHeaderTypography>
                            Frameworks
                        </SubHeaderTypography>
                        <ParagraphTypography>
                            React, Node.js, Express, MongoDB
                        </ParagraphTypography>
                        <SubHeaderTypography>
                            Design
                        </SubHeaderTypography>
                        <ParagraphTypography>
                            Figma, Adobe Premiere Pro, Adobe Photoshop
                        </ParagraphTypography>
                    </AccordionDetails>
                </StyledAccordion>
                <StyledAccordion
                sx ={{
                    backgroundColor: '#567673',
                }}>
                    <AccordionSummary
                    expandIcon={<StyledIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx = {{
                        borderRadius: 1,
                        '&:hover': {
                            backgroundColor: '#232428',
                            borderRadius: 1,
                            color: '#567673',
                        }
                    }}
                    >
                        <HeaderTypography>Experience</HeaderTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SubHeaderTypography>
                            Full Stack Developer –– UW Entrepreneurship
                        </SubHeaderTypography>
                        <ParagraphTypography>
                            January 2022<br></br>
                        </ParagraphTypography>
                        <SubHeaderTypography>
                            QA Developer –– Polaris Intelligence
                        </SubHeaderTypography>
                        <ParagraphTypography>
                            January 2022 - April 2022
                        </ParagraphTypography>
                    </AccordionDetails>
                </StyledAccordion>
                <StyledAccordion
                sx ={{
                    backgroundColor: '#BDD4E7',
                }}>
                    <AccordionSummary
                    expandIcon={<StyledIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx = {{
                        '&:hover': {
                            backgroundColor: '#232428',
                            color: '#BDD4E7',
                        }
                    }}
                    >
                        <HeaderTypography>Extracurriculars</HeaderTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SubHeaderTypography>
                            Events Planner –– Waterloop
                        </SubHeaderTypography>
                        <ParagraphTypography>
                            January 2022
                        </ParagraphTypography>
                    </AccordionDetails>
                </StyledAccordion>
                <StyledAccordion
                sx ={{
                    backgroundColor: '#DDC8C4',
                }}>
                    <AccordionSummary
                    expandIcon={<StyledIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx = {{
                        borderRadius: 1,
                        '&:hover': {
                            backgroundColor: '#232428',
                            borderRadius: 1,
                            color: '#DDC8C4',
                        }
                    }}
                    >
                        <HeaderTypography>Education</HeaderTypography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ParagraphTypography>
                            I am a 1A Systems Design Engineering at the University of Waterloo.
                        </ParagraphTypography>
                    </AccordionDetails>
                </StyledAccordion>
            </div>
            <div className = "footer">
                <h2>Let's Connect!</h2>
                <div className = "button">
                    <div className = "githubButton">
                        <a href = "https://github.com/lisazhao30" target="_blank"><img src={github}></img></a>
                    </div>
                    <div className = "linkedinButton">
                        <a href = "https://www.linkedin.com/in/lisazhao03/" target="_blank"><img src={linkedin}></img></a>
                    </div>
                    <div className = "emailButton">
                        <a href = "mailto:l239zhao@uwaterloo.ca" target="_blank"><img src={email}></img></a>
                    </div>
                </div>
                <div className = "credit">
                        <a href = "https://josephlamonica.me/" target="_blank">This website was inspired by Joseph Lamonica</a>
                </div>
            </div>
        </div>       
    );
}


/*const DropdownInfo = () => {
    <div className = "experienceDropdown">
        <button onClick = {onClick} className = "dropdownButton">Experience</button>
        {hideDropdownInfo ? <DropdownInfo /> : null}
    </div>
    return (
    <div className = "dropdownInfo">
        <div className = "EntSoc">
            <h4>Full Stack Developer - UW Entrepreneurship Society</h4>
            <h5>January 2022 - Current</h5>
        </div>
        <div className = "Polaris">
            <h4>QA Developer - Polaris Intelligence</h4>
            <h5>January 2022 - April 2022</h5>
        </div>
    </div>
    )
} */

export default About