import { connect } from 'react-redux';
import { setSearch } from '../actions';
import Search from '../components/Search';
import { listSelector } from '../selectors';

const mapStateToProps = state => ({
  list: listSelector(state),
});

export default connect(
  mapStateToProps,
  {
    setSearch,
  },
)(Search);
