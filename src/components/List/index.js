import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemList from '../ItemList';
import styles from './style.scss';

class List extends Component {
  componentDidMount() {
    const { getListRequestAction } = this.props;
    getListRequestAction();
  }

  render() {
    const {
      list,
      idEdit,
      songEdit,
      singerEdit,
      changeIdEditAction,
      changeSongEditAction,
      changeSingerEditAction,
      deleteItemRequestAction,
      putItemRequestAction,
    } = this.props;
    const listItem = list.map(item => (
      <ItemList
        key={item.id}
        itemList={item}
        idEdit={idEdit}
        songEdit={songEdit}
        singerEdit={singerEdit}
        changeIdEditAction={changeIdEditAction}
        changeSongEditAction={changeSongEditAction}
        changeSingerEditAction={changeSingerEditAction}
        deleteItemRequestAction={deleteItemRequestAction}
        putItemRequestAction={putItemRequestAction}
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
  changeIdEditAction: PropTypes.func.isRequired,
  changeSongEditAction: PropTypes.func.isRequired,
  changeSingerEditAction: PropTypes.func.isRequired,
  getListRequestAction: PropTypes.func.isRequired,
  deleteItemRequestAction: PropTypes.func.isRequired,
  putItemRequestAction: PropTypes.func.isRequired,
};

export default List;
