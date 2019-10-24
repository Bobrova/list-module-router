import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class EditItem extends Component {
  handleSongChange = e => {
    const { changeSongEditAction } = this.props;
    changeSongEditAction(e.target.value);
  };

  handleSingerChange = e => {
    const { changeSingerEditAction } = this.props;
    changeSingerEditAction(e.target.value);
  };

  handleClickSave = () => {
    const {
      idEdit,
      songEdit,
      singerEdit,
      putItemRequestAction,
    } = this.props;
    if (songEdit === '' || singerEdit === '') {
      return;
    }
    putItemRequestAction({ id: idEdit, song: songEdit, singer: singerEdit });
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
  changeSingerEditAction: PropTypes.func.isRequired,
  changeSongEditAction: PropTypes.func.isRequired,
  putItemRequestAction: PropTypes.func.isRequired,
};

export default EditItem;
