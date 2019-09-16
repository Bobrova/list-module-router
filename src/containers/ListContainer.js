import { connect } from 'react-redux';
import {
  delItem,
  saveEdit,
} from '../actions';
import List from '../components/List';
import { visibleListSelector } from '../selectors';

const mapStateToProps = state => ({
  list: visibleListSelector(state),
});

export default connect(
  mapStateToProps,
  {
    delItem,
    saveEdit,
  },
)(List);
