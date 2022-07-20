import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from '../actions/currentVideo.js';

var mapStateToProps = (state) => {
  return {video: state.currentVideo};
};
var mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)),
  };
};

var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);


// var VideoPlayerContainer = () => {
//   var mapStateToProps = (state) => ({video: state});
//   var mapDispatchToProps = (dispatch) => {
//     return {
//       handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)),
//     };
//   };
//   connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
// };

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.


export default VideoPlayerContainer;
