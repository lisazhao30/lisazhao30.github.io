import "../css/sidebar.css"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const sidebar = () => {
    
    const StyledButton = styled(Button)({
        borderRadius: 0,
        color: '#FFFFFF',
        borderColor: '#FFFFFF',
        width: '8vw',
        '&:hover': {
            borderColor: '#FFFFFF',
            backgroundColor: '#FFFFFF',
            color: '#232428',
        }
    });

    return (
            <div className = "rectangle"> 
            <div className = "text">
                <h1>Hi, I'm Lisa!</h1>
                <p className = "intro-text">I am...</p>
                <p className = "details">• A 1B Systems Design Engineering student at the University of Waterloo. 
                <br></br><br></br>• Interested in software development.
                <br></br><br></br>• Passionate about using technology to create beneficial systems for the greater good.
                </p>
            </div>
                <div className = "buttons">
                    <Link component = {RouterLink} to="/" underline = "none">
                        <StyledButton variant = "outlined">Home</StyledButton>
                    </Link>
                    <Link component = {RouterLink} to="/about" underline = "none">
                        <StyledButton variant = "outlined">About</StyledButton>
                    </Link>
                    <Link underline = "none" target="_blank" rel="noreferrer"
                    href = "https://drive.google.com/file/d/1ra5IeGaLx-P8MPEIcVfYoGeE-Zi7ZJba/view?usp=sharing"><StyledButton variant = "outlined">Resume</StyledButton></Link>
                </div>
            </div>
    )
}

export default sidebar