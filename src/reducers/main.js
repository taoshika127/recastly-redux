import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

// var rootReducer = (previousState = {'videoList': [], 'currentVideo': null}, action) => {
//   var result = combineReducers({
//     currentVideo: currentVideo.bind(null, previousState.currentVideo, action),
//     videoList: videoList.bind(null, previousState.videoList, action)
//   });
//   console.log('result', previousState, action, rootReducer.name);
//   return result;

// };

var rootReducer = combineReducers({
  currentVideo,
  videoList
});

// var rootReducer = (previousState = {'videoList': [], 'currentVideo': null}, action) => {
//   var result = combineReducers({
//     currentVideo: currentVideo(previousState.currentVideo, action),
//     videoList: videoList(previousState.videoList, action)
//   });
//   console.log('invoked', previousState, action, rootReducer.name);
//   return result;

// };


//TODO: define the root reducer for this app
//const rootReducer = Redux.combineReducers({count: counterReducer, auth: authReducer})
//const store = Redux.createStore(rootReducer);

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
