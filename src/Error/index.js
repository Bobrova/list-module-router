import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Error = ({ error }) => {
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
};

export default Error;
