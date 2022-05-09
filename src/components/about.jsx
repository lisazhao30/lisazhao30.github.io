import "../css/about.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const About = () => { 

    const StyledAccordion = styled(Accordion)({
        width: '67vw',
        color: '#FFFFFF',
        ['@media screen and (max-width: 420px)']: {
            width: '90vw'
        }
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
                            Javascript/TypeScript, HTML, CSS, Python, C++, Bash
                        </ParagraphTypography>
                        <SubHeaderTypography>
                            Frameworks
                        </SubHeaderTypography>
                        <ParagraphTypography>
                            React, Node.js, Express, MongoDB, Chart.js, MUI
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
                            QA Analyst and Web Developer –– Polaris Intelligence
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
                            Operations Manager –– Waterloop
                        </SubHeaderTypography>
                        <ParagraphTypography>
                            May 2022 - Present
                        </ParagraphTypography>
                        <SubHeaderTypography>
                            Events Planner –– Waterloop
                        </SubHeaderTypography>
                        <ParagraphTypography>
                            January 2022 - April 2022
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
                            I am a 1B Systems Design Engineering at the University of Waterloo.
                        </ParagraphTypography>
                        <ParagraphTypography>
                            Relevant coursework: SYDE223 - Data
                            Structures and Algorithms (C++), SYDE121 - Digital Computation (C++, Python, Bash).
                        </ParagraphTypography>
                    </AccordionDetails>
                </StyledAccordion>
            </div>
        </div>       
    );
}

export default About