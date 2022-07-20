import Redux from 'redux';

var currentVideoReducer = (previousState = null, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  }
  return previousState;
  //TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
