import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  changeIdEdit,
  changeSongEdit,
  changeSingerEdit,
  putItemRequest,
} from 'actions';
import {
  listSelector,
  singerEditSelector,
  songEditSelector,
  idEditSelector,
} from 'selectors';
import EditItem from '../EditItem';
import styles from './style.scss';

const mapStateToProps = (state) => ({
  list: listSelector(state),
  idEdit: idEditSelector(state),
  songEdit: songEditSelector(state),
  singerEdit: singerEditSelector(state),
});

class ItemAbout extends Component {
  handleEditItem = () => {
    const {
      changeIdEdit,
      list,
      match,
      changeSongEdit,
      changeSingerEdit,
    } = this.props;
    const itemList = list.filter(item => (item.id).toString() === match.params.id)[0];
    changeIdEdit(itemList.id);
    changeSongEdit(itemList.song);
    changeSingerEdit(itemList.singer);
  };

  render() {
    const {
      list,
      match,
      idEdit,
      songEdit,
      singerEdit,
      changeIdEdit,
      changeSongEdit,
      changeSingerEdit,
      putItemRequest,
    } = this.props;
    const itemList = list.filter(item => (item.id).toString() === match.params.id)[0];

    return (
      <div key={itemList.id} className={styles.listItem}>
        {idEdit === itemList.id ? (
          <EditItem
            itemList={itemList}
            idEdit={idEdit}
            changeIdEdit={changeIdEdit}
            changeSongEdit={changeSongEdit}
            changeSingerEdit={changeSingerEdit}
            songEdit={songEdit}
            singerEdit={singerEdit}
            putItem={putItemRequest}
          />
        ) : (
          <>
            <div className={styles.listItem__name}>
              <p className={styles.list_nameSong}>{itemList.song}</p>
              <p className={styles.list_nameSinger}>{itemList.singer}</p>
            </div>
            <Link to="/" className={styles.btnBack}>&#11013;</Link>
            <div className={styles.btnEdit} onClick={this.handleEditItem}>
              &#x270e;
            </div>
          </>
        )}
      </div>
    );
  }
}

ItemAbout.propTypes = {
  list: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  idEdit: PropTypes.number.isRequired,
  songEdit: PropTypes.string.isRequired,
  singerEdit: PropTypes.string.isRequired,
  changeIdEdit: PropTypes.func.isRequired,
  changeSongEdit: PropTypes.func.isRequired,
  changeSingerEdit: PropTypes.func.isRequired,
  putItemRequest: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  {
    changeIdEdit,
    changeSongEdit,
    changeSingerEdit,
    putItemRequest,
  },
)(ItemAbout);
