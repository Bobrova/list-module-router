import { connect } from 'react-redux';
import Forms from 'components/Forms';
import {
  setSongAction,
  setSingerAction,
  postItemRequestAction,
} from 'actions';

import {
  currentIdSelector,
  singerSelector,
  songSelector,
  listSelector,
} from 'selectors';

const mapStateToProps = state => ({
  list: listSelector(state),
  singer: singerSelector(state),
  song: songSelector(state),
  currentId: currentIdSelector(state),
});

export default connect(
  mapStateToProps,
  {
    setSongAction,
    setSingerAction,
    postItemRequestAction,
  },
)(Forms);
