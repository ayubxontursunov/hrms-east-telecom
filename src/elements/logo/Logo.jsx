import PropTypes from 'prop-types';
import './Logo.css';

function Logo({ onClick, logoImg, color, size }) {
    return (
        <div className="logo-container" onClick={onClick}>
            <img style={{width:size}} className="logo-img" src={logoImg} alt="logo" />
            <span className="logo-title" style={{color:color}}>EAST TELECOM</span>
        </div>
    );
}

Logo.propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string,
    size: PropTypes.string,
    logoImg: PropTypes.string.isRequired, // Ensure that the logoImg prop is a string and is required
};

export default Logo;
