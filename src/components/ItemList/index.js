import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './style.scss';
import EditItem from '../EditItem';

class ItemList extends Component {
  handleDelItem = () => {
    const { itemList, deleteItem } = this.props;
    deleteItem(itemList.id);
  };

  handleEditItem = () => {
    const {
      changeIdEdit,
      itemList,
      changeSongEdit,
      changeSingerEdit,
    } = this.props;
    changeIdEdit(itemList.id);
    changeSongEdit(itemList.song);
    changeSingerEdit(itemList.singer);
  };

  render() {
    const {
      itemList,
      idEdit,
      songEdit,
      singerEdit,
      changeIdEdit,
      changeSongEdit,
      changeSingerEdit,
      putItem,
    } = this.props;

    return (
      <div key={itemList.id} className={styles.listItem}>
        {idEdit === itemList.id ? (
          <EditItem
            idEdit={idEdit}
            changeIdEdit={changeIdEdit}
            changeSongEdit={changeSongEdit}
            changeSingerEdit={changeSingerEdit}
            songEdit={songEdit}
            singerEdit={singerEdit}
            putItem={putItem}
          />
        ) : (
          <div className={styles.listItem__name}>
            <p className={styles.list_nameSong}>{itemList.song}</p>
            <p className={styles.list_nameSinger}>{itemList.singer}</p>
            <div
              className={styles.btnDel}
              onClick={this.handleDelItem}
            >
              &#x2718;
            </div>
            <div
              className={styles.btnEdit}
              onClick={this.handleEditItem}
            >
            &#x270e;
            </div>
            <Link to={`/list/${itemList.id}`} className={styles.btnAbout}><span className={styles.btnAboutSpan}>&#8250;</span></Link>
          </div>
        )}
      </div>
    );
  }
}

ItemList.propTypes = {
  itemList: PropTypes.object.isRequired,
  idEdit: PropTypes.number.isRequired,
  songEdit: PropTypes.string.isRequired,
  singerEdit: PropTypes.string.isRequired,
  changeIdEdit: PropTypes.func.isRequired,
  changeSongEdit: PropTypes.func.isRequired,
  changeSingerEdit: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  putItem: PropTypes.func.isRequired,
};

export default ItemList;
