import { connect } from 'react-redux';
import Search from 'components/Search';
import { setSearch } from 'actions';
import { searchSelector } from 'selectors';

const mapStateToProps = state => ({
  search: searchSelector(state),
});

export default connect(
  mapStateToProps,
  {
    setSearch,
  },
)(Search);
