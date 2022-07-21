import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  var changeVideo = () => {
    searchYouTube({_, q, _}, (data) => {
      console.log('q', q);
      console.log('archActionData', data);
      //return {type: 'HANDLE_VIDEO_SEARCH', data: data}; key: YOUTUBE_API_KEY, query: q, max: 5
      //return {type: 'HANDLE_VIDEO_SEARCH', data: data, query: q};
      return changeVideoList(data);
      //currentData = data;
      // var searchAction = () => {
      //   return {type: 'HANDLE_VIDEO_SEARCH', data: currentData, query: q};
      // };
      // return searchAction;
    });
  };
  return changeVideo;
  //return {type: 'HANDLE_VIDEO_SEARCH', data: currentData, query: q};



  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
