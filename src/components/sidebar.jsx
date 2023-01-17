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
        width: '6vw',
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
                    <p className = "details">• A 2A Systems Design Engineering student at the University of Waterloo. 
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
                    </div>
            </div>
    )
}

export default sidebar