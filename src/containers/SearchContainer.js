import { connect } from 'react-redux';
import Search from 'components/Search';
import { setSearchAction } from 'actions';
import { searchSelector } from 'selectors';

const mapStateToProps = state => ({
  search: searchSelector(state),
});

export default connect(
  mapStateToProps,
  {
    setSearchAction,
  },
)(Search);
