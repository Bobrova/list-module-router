import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './style.scss';

class Search extends Component {
  componentDidMount() {
    const { search, history } = this.props;
    if (search) {
      history.push({ search: `search=${search}` });
    } else history.push('/');
  }

  handleSearch = (e) => {
    const { history } = this.props;
    const { value } = e.target;
    if (value) {
      history.push({ search: `search=${value}` });
    } else history.push('/');
    const { setSearchAction } = this.props;
    setSearchAction(e.target.value);
  }


  render() {
    const { search } = this.props;
    return (
      <section className={styles.search}>
        <div className={styles.loupe}>&#128269;</div>
        <input className={styles.searchInput} type="text" placeholder="Поиск" onChange={this.handleSearch} value={search} />
      </section>
    );
  }
}

Search.propTypes = {
  setSearchAction: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Search);
