import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './style.scss';
import EditItem from '../EditItem';

class ItemList extends Component {
  handleDelItem = () => {
    const { itemList, deleteItemRequestAction } = this.props;
    deleteItemRequestAction(itemList.id);
  };

  handleEditItem = () => {
    const {
      changeIdEditAction,
      itemList,
      changeSongEditAction,
      changeSingerEditAction,
    } = this.props;
    changeIdEditAction(itemList.id);
    changeSongEditAction(itemList.song);
    changeSingerEditAction(itemList.singer);
  };

  render() {
    const {
      itemList,
      idEdit,
      songEdit,
      singerEdit,
      changeIdEditAction,
      changeSongEditAction,
      changeSingerEditAction,
      putItemRequestAction,
    } = this.props;

    return (
      <div key={itemList.id} className={styles.listItem}>
        {idEdit === itemList.id ? (
          <EditItem
            idEdit={idEdit}
            changeIdEditAction={changeIdEditAction}
            changeSongEditAction={changeSongEditAction}
            changeSingerEditAction={changeSingerEditAction}
            songEdit={songEdit}
            singerEdit={singerEdit}
            putItemRequestAction={putItemRequestAction}
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
  changeIdEditAction: PropTypes.func.isRequired,
  changeSongEditAction: PropTypes.func.isRequired,
  changeSingerEditAction: PropTypes.func.isRequired,
  deleteItemRequestAction: PropTypes.func.isRequired,
  putItemRequestAction: PropTypes.func.isRequired,
};

export default ItemList;
