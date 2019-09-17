import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {
  delItem,
  saveEdit,
} from '../../actions';
import { visibleListSelector } from '../../selectors';
import PropTypes from 'prop-types';
import styles from './style.scss';

const mapStateToProps = (state) => ({
  list: visibleListSelector(state),
});

class ItemAbout extends Component{
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

  handleEditItem = () => {
    const { list, match } = this.props;
    const itemList = list.filter(item => item.id == match.params.id)[0];
    this.setState({
      idEdit: itemList.id,
      songEdit: itemList.song,
      singerEdit: itemList.singer,
    });
  };
  render() {
    const { list, match } = this.props;
    const itemList = list.filter(item => item.id == match.params.id)[0];

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
        <Fragment>
        <div className={styles.listItem__name}>
          <p className={styles.list_nameSong}>{itemList.song}</p>
          <p className={styles.list_nameSinger}>{itemList.singer}</p>
        </div>
        <Link to={`/`} className={styles.btnBack}>&#11013;</Link>
        <div className={styles.btnEdit} onClick={this.handleEditItem}>
          &#x270e;
        </div>
        </Fragment>
         )}
      </div>
  )
}
}

export default connect(
  mapStateToProps,
  {
    delItem,
    saveEdit,
  },
)(ItemAbout);
