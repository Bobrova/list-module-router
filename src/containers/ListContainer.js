import { connect } from 'react-redux';
import List from 'components/List';
import {
  changeIdEditAction,
  changeSongEditAction,
  changeSingerEditAction,
  getListRequestAction,
  deleteItemRequestAction,
  putItemRequestAction,
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
    changeIdEditAction,
    changeSongEditAction,
    changeSingerEditAction,
    getListRequestAction,
    deleteItemRequestAction,
    putItemRequestAction,
  },
)(List);
