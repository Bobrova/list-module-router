import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class ItemList extends Component {
  state = {
    idEdit: 0,
    songEdit: '',
    singerEdit: '',
  };

  handleSongChange = e => {
    this.setState({ songEdit: e.target.value });
  };

  handleSingerChange = e => {
    this.setState({ singerEdit: e.target.value });
  };

  handleClickSave = () => {
    const {
      delItem,
      saveEdit,
    } = this.props;
    const { idEdit, songEdit, singerEdit } = this.state;
    if (songEdit === '' && singerEdit === '') {
      delItem(idEdit);
    } else {
      saveEdit({ idEdit, song: songEdit, singer: singerEdit });
    }
    this.setState({
      idEdit: 0,
      songEdit: '',
      singerEdit: '',
    });
  }

  handleDelItem = () => {
    const { delItem, itemList } = this.props;
    delItem(itemList.id);
  };

  handleEditItem = () => {
    const {
      itemList,
    } = this.props;
    this.setState({
      idEdit: itemList.id,
      songEdit: itemList.song,
      singerEdit: itemList.singer,
    });
  };

  render() {
    const {
      itemList,
    } = this.props;

    const { idEdit, songEdit, singerEdit } = this.state;

    return (
      <div key={itemList.id} className={styles.listItem}>
        {itemList.id === idEdit ? (
          <div className={styles.listItem__name}>
            <input
              type="text"
              className={styles.textEditing}
              value={songEdit}
              onChange={this.handleSongChange}
            />
            <input
              type="text"
              className={styles.textEditing}
              value={singerEdit}
              onChange={this.handleSingerChange}
            />
            <div
              className={styles.btnSave}
              onClick={this.handleClickSave}
            >
            &#128190;
            </div>
          </div>
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
          </div>
        )}
      </div>
    );
  }
}

ItemList.propTypes = {
  itemList: PropTypes.object.isRequired,
  delItem: PropTypes.func.isRequired,
  saveEdit: PropTypes.func.isRequired,
};

export default ItemList;
