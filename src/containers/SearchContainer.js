import { connect } from 'react-redux';
import { setSearch } from '../actions';
import Search from '../components/Search';
import { searchSelector } from '../selectors';

const mapStateToProps = state => ({
  search: searchSelector(state),
});

export default connect(
  mapStateToProps,
  {
    setSearch,
  },
)(Search);
