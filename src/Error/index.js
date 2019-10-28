import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Error = ({ error, clearErrorFieldAction }) => {
  const clearErrorField = () => {
    clearErrorFieldAction('');
  };

  setTimeout(clearErrorField, 4000);
  return (
    <div className={styles.errorBlock}>
      <p className={styles.errorText}>
        {error}
      </p>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
  clearErrorFieldAction: PropTypes.func.isRequired,
};

export default Error;
