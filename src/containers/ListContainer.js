import { connect } from 'react-redux';
import {
  delItem,
  saveEdit,
  changeIdEdit,
  changeSongEdit,
  changeSingerEdit,
} from '../actions';
import List from '../components/List';
import {
  visibleListSelector,
  singerEditSelector,
  songEditSelector,
  idEditSelector,
} from '../selectors';

const mapStateToProps = state => ({
  list: visibleListSelector(state),
  idEdit: idEditSelector(state),
  songEdit: songEditSelector(state),
  singerEdit: singerEditSelector(state),
});

export default connect(
  mapStateToProps,
  {
    delItem,
    saveEdit,
    changeIdEdit,
    changeSongEdit,
    changeSingerEdit,
  },
)(List);
