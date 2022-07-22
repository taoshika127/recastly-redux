import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

//function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
// var mapStateToProps = (state) => ({});
// var SearchContainer = () => {
//   // connect(mapStateToProps?, mapDispatchToProps?)(Search);
// };

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
//handleSearchChange

var mapStateToProps = (state) => {
  return {videoList: state.data, query: state.query}; //do not need query
};
// var mapDispatchToProps = (dispatch) => (
//   {handleSearchInputChange: (q) => {
//     dispatch(handleVideoSearch(q));
//   }
//   }
// );
var mapDispatchToProps = {handleSearchInputChange: handleVideoSearch};
var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
