import "../css/footer.css"
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import email from '../images/arroba.png'

const Footer = () => {
    return (
        <div className = "footer">
            <h2>Let's Connect!</h2>
            <div className = "button">
                <a href = "https://github.com/lisazhao30" target="_blank"><img src={github}></img></a>
                <a href = "https://www.linkedin.com/in/lisazhao03/" target="_blank"><img src={linkedin}></img></a>
                <a href = "mailto:l239zhao@uwaterloo.ca" target="_blank"><img src={email}></img></a>
            </div>
            <div className = "credit">
                <a href = "https://josephlamonica.me/" target="_blank">This website was inspired by Joseph Lamonica</a>
            </div>
        </div>
    )
}

export default Footer