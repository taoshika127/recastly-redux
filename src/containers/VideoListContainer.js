import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import changeVideoList from './../actions/videoList';

var VideoListContainer = () => {};
var mapStateToProps = (state) => {
  return {videos: state.videoList};
};
var mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video)),
    // videos: (video) => dispatch(changeVideoList(video)),
  };
};

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);
//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
