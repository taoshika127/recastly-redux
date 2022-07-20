import Redux from 'redux';

var currentVideoReducer = (previousState, action) => {
  // if (action && action.type === 'CHANGE_VIDEO') {
  //   console.log('action', action.video);
  //   return action.video;
  // }
  // console.log('previousState', previousState);
  // return previousState;
  //TODO: define a reducer for the currentVideo field of our state.
  console.log(previousState, action, action.video);
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video;
  default:
    return previousState || null;
  }
};

export default currentVideoReducer;
