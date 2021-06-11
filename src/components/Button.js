import { Link } from 'react-router-dom';
import './Button.css';
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    return(
        <Link to="/sign-up">
            <button
            className={`btn ${checkButtonSize} ${checkButtonStyle}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}