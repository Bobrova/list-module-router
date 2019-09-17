import { connect } from 'react-redux';
import {
  delItem,
  saveEdit,
} from '../actions';
import ItemAbout from '../components/ItemAbout';
import { visibleListSelector } from '../selectors';

const mapStateToProps = (state, ownProps) => ({
  list: visibleListSelector(state),
  ownProps.params.id,
});

export default connect(
  mapStateToProps,
  {
    delItem,
    saveEdit,
  },
)(ItemAbout);
