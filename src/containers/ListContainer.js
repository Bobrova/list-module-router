import { connect } from 'react-redux';
import List from 'components/List';
import {
  changeIdEdit,
  changeSongEdit,
  changeSingerEdit,
  getListRequest,
  deleteItemRequest,
  putItemRequest,
} from 'actions';
import {
  visibleListSelector,
  singerEditSelector,
  songEditSelector,
  idEditSelector,
} from 'selectors';

const mapStateToProps = state => ({
  list: visibleListSelector(state),
  idEdit: idEditSelector(state),
  songEdit: songEditSelector(state),
  singerEdit: singerEditSelector(state),
});

export default connect(
  mapStateToProps,
  {
    changeIdEdit,
    changeSongEdit,
    changeSingerEdit,
    getListRequest,
    deleteItemRequest,
    putItemRequest,
  },
)(List);
