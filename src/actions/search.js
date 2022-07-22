import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  // var changeVideo = () => {
  //   searchYouTube({_, q: q, _}, (data) => {
  //     console.log('q', q);
  //     console.log('archActionData', data);
  //     return changeVideoList(data);
  //   });
  // };
  // return changeVideo();
  var helper = (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q, _}, (data) => {
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  };
  return helper;
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
