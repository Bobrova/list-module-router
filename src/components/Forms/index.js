import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Error from 'error';
import styles from './style.scss';

class Forms extends Component {
  handleSongChange = e => {
    const { setSongAction } = this.props;
    const text = e.target.value;
    setSongAction(text);
  };

  handleSingerChange = e => {
    const { setSingerAction } = this.props;
    const text = e.target.value;
    setSingerAction(text);
  };

  handleClick = () => {
    const {
      currentId,
      song,
      singer,
      setSingerAction,
      setSongAction,
      postItemRequestAction,
    } = this.props;
    if (song !== '' && /\S/.test(song)) {
      if (singer !== '' && /\S/.test(singer)) {
        setSingerAction('');
        setSongAction('');
        postItemRequestAction({
          id: currentId + 1,
          song: song.trim(),
          singer: singer.trim(),
        });
      }
    }
  };

  render() {
    const {
      song,
      singer,
      error,
      clearErrorFieldAction,
    } = this.props;
    return (
      <section className={styles.dataInput}>
        {error && <Error error={error} clearErrorFieldAction={clearErrorFieldAction} />}
        <form>
          <div className={styles.formItem}>
            <input
              className={styles.formInput}
              type="text"
              placeholder="Песня"
              onChange={this.handleSongChange}
              value={song}
            />
          </div>
          <div className={styles.formItem}>
            <input
              className={styles.formInput}
              type="text"
              placeholder="Исполнитель"
              onChange={this.handleSingerChange}
              value={singer}
            />
          </div>
          <div className={styles.btnAdd} onClick={this.handleClick}>
            Добавить
          </div>
        </form>
      </section>
    );
  }
}

Forms.propTypes = {
  currentId: PropTypes.number.isRequired,
  song: PropTypes.string.isRequired,
  singer: PropTypes.string.isRequired,
  setSongAction: PropTypes.func.isRequired,
  setSingerAction: PropTypes.func.isRequired,
  postItemRequestAction: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  clearErrorFieldAction: PropTypes.func.isRequired,
};

export default Forms;
