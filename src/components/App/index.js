import React, { Component } from 'react';
import styles from './style.scss';
import FormsContainer from '../../containers/FormsContainer';
import SearchContainer from '../../containers/SearchContainer';
import ListContainer from '../../containers/ListContainer';

class App extends Component {
  render() {
    return (
      <section className={styles.page}>
        <FormsContainer />
        <SearchContainer />
        <ListContainer />
      </section>
    );
  }
}
export default App;
