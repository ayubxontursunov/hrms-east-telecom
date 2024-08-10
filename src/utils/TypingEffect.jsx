import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TypingEffect = ({ text, typingSpeed }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimeout);
    }
  }, [index, text, typingSpeed]);

  return <div className="second-section_text">{displayText}</div>;
};

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
  typingSpeed: PropTypes.number,
};

TypingEffect.defaultProps = {
  typingSpeed: 100,
};

export default TypingEffect;
