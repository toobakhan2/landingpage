import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Ensure this is imported
import Style from './FlipButton.module.css';

// Example usage: <FlipButton className="icon-right" />
export default function FlipButton({
  link = '#',
  text,
  icon,
  onClick = () => {},
  isLink = true,
  className = '',
}) {
  const content = (
    <>
      <span className={Style['front']}>
        <FontAwesomeIcon icon={icon} /> {text}
      </span>
      <span className={Style['back']}>
        <FontAwesomeIcon icon={icon} /> {text}
      </span>
    </>
  );

  if (isLink) {
    return (
      <a href={link} className={`${Style['btn-flip']} ${className}`} aria-label={text}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${Style['btn-flip']} ${className}`}
      onClick={onClick}
      aria-label={text}
    >
      {content}
    </button>
  );
}

FlipButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.object, // Adjust based on FontAwesomeIcon prop types
  onClick: PropTypes.func,
  isLink: PropTypes.bool,
  className: PropTypes.string,
};
