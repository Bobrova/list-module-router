import React, { Component } from 'react';
import FormsContainer from 'containers/FormsContainer';
import SearchContainer from 'containers/SearchContainer';
import ListContainer from 'containers/ListContainer';
import styles from './style.scss';

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
