import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class EditItem extends Component {
  handleSongChange = e => {
    const { changeSongEdit } = this.props;
    changeSongEdit(e.target.value);
  };

  handleSingerChange = e => {
    const { changeSingerEdit } = this.props;
    changeSingerEdit(e.target.value);
  };

  handleClickSave = () => {
    const {
      idEdit,
      songEdit,
      singerEdit,
      changeIdEdit,
      putItem,
    } = this.props;
    if (songEdit === '' || singerEdit === '') {
      return;
    }
    putItem({ id: idEdit, song: songEdit, singer: singerEdit });
    changeIdEdit(0);
  }

  render() {
    const { singerEdit, songEdit } = this.props;
    return (
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
    );
  }
}

EditItem.propTypes = {
  idEdit: PropTypes.number.isRequired,
  singerEdit: PropTypes.string.isRequired,
  songEdit: PropTypes.string.isRequired,
  changeSingerEdit: PropTypes.func.isRequired,
  changeSongEdit: PropTypes.func.isRequired,
  changeIdEdit: PropTypes.func.isRequired,
  putItem: PropTypes.func.isRequired,
};

export default EditItem;
