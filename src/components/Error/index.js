import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Error extends Component {
  render() {
    const { error } = this.props;
    return (
      <div className={styles.errorBlock}>
        <p className={styles.errorText}>
          {error}
        </p>
      </div>
    );
  }
}

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
