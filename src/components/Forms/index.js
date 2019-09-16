import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Forms extends Component {
  handleSongChange = e => {
    const { setSong } = this.props;
    const text = e.target.value;
    setSong(text);
  };

  handleSingerChange = e => {
    const { setSinger } = this.props;
    const text = e.target.value;
    setSinger(text);
  };

  handleClick = () => {
    const {
      currentId,
      song,
      singer,
      addItem,
      setSinger,
      setSong,
    } = this.props;
    if (song !== '' && /\S/.test(song)) {
      if (singer !== '' && /\S/.test(singer)) {
        addItem({
          id: currentId + 1,
          song: song.trim(),
          singer: singer.trim(),
        });
        setSinger('');
        setSong('');
      }
    }
  };

  render() {
    const { song, singer } = this.props;
    return (
      <section className={styles.dataInput}>
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
  setSong: PropTypes.func.isRequired,
  setSinger: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default Forms;
