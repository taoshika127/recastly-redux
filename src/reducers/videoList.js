import Redux from 'redux';

var videoListReducer = (previousState = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  }
  return previousState;
};

export default videoListReducer;
