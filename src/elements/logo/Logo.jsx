import logoImg from '../../image/logo_1.png';
import './Logo.css';
import PropTypes from 'prop-types'
function Logo({ onClick }){
     return(
          <div className='logo-container' onClick={onClick}>
               <img className="logo-img" src={logoImg} alt="logo" />
               <span className="logo-title">EAST TELECOM</span>
          </div>
     )
}

Logo.propTypes={
     onClick:PropTypes.func,
}

export default Logo