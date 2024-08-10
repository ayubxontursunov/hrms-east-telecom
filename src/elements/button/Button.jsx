import './Button.css';

import PropTypes from 'prop-types';
function Button(props){
     return(
          <button className={`button ${props.class}`}>{props.content}</button>
     )
}

Button.propTypes={
     content:PropTypes.string,
     class:PropTypes.string
}

Button.DefaultProps={
     content:"click me",
     class:""
}

export default Button