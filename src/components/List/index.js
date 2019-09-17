import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList';
import styles from './style.scss';

class List extends Component {
  render() {
    const {
      list,
      delItem,
      saveEdit,
    } = this.props;
    const listItem = list.map(item => (
      <ItemList
        key={item.id}
        itemList={item}
        delItem={delItem}
        saveEdit={saveEdit}
      />
    ));

    return (
      <section className={styles.list}>
        <div className={styles.listMusic}>
          {listItem}
        </div>
      </section>
    );
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired,
  delItem: PropTypes.func.isRequired,
  saveEdit: PropTypes.func.isRequired,
};

export default List;
