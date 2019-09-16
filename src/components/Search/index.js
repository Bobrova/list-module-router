import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Search extends Component {
  handleSearch = (e) => {
    const { setSearch } = this.props;
    const text = e.target.value.trim();
    setSearch(text);
  }

  render() {
    return (
      <section className={styles.search}>
        <div className={styles.loupe}>&#128269;</div>
        <input className={styles.searchInput} type="text" placeholder="Поиск" onChange={this.handleSearch} />
      </section>
    );
  }
}

Search.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Search;
