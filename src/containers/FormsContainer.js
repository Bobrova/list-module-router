import { connect } from 'react-redux';
import Forms from 'components/Forms';
import {
  setSongAction,
  setSingerAction,
  postItemRequestAction,
  clearErrorFieldAction,
} from 'actions';

import {
  currentIdSelector,
  singerSelector,
  songSelector,
  listSelector,
  errorSelector,
} from 'selectors';

const mapStateToProps = state => ({
  list: listSelector(state),
  singer: singerSelector(state),
  song: songSelector(state),
  currentId: currentIdSelector(state),
  error: errorSelector(state),
});

export default connect(
  mapStateToProps,
  {
    setSongAction,
    setSingerAction,
    postItemRequestAction,
    clearErrorFieldAction,
  },
)(Forms);
