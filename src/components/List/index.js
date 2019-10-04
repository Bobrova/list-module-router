import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList';
import styles from './style.scss';

class List extends Component {
  componentDidMount() {
    const { getListRequest } = this.props;
    getListRequest();
  }

  render() {
    const {
      list,
      idEdit,
      songEdit,
      singerEdit,
      changeIdEdit,
      changeSongEdit,
      changeSingerEdit,
      saveEdit,
      deleteItemRequest,
      putItemRequest,
    } = this.props;
    const listItem = list.map(item => (
      <ItemList
        key={item.id}
        itemList={item}
        idEdit={idEdit}
        songEdit={songEdit}
        singerEdit={singerEdit}
        changeIdEdit={changeIdEdit}
        changeSongEdit={changeSongEdit}
        changeSingerEdit={changeSingerEdit}
        saveEdit={saveEdit}
        deleteItem={deleteItemRequest}
        putItem={putItemRequest}
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
  idEdit: PropTypes.number.isRequired,
  songEdit: PropTypes.string.isRequired,
  singerEdit: PropTypes.string.isRequired,
  changeIdEdit: PropTypes.func.isRequired,
  changeSongEdit: PropTypes.func.isRequired,
  changeSingerEdit: PropTypes.func.isRequired,
  saveEdit: PropTypes.func.isRequired,
  getListRequest: PropTypes.func.isRequired,
  deleteItemRequest: PropTypes.func.isRequired,
  putItemRequest: PropTypes.func.isRequired,
};

export default List;
