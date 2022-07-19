import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  var currentData;
  searchYouTube({_, q, _}, (data) => {
    console.log(data);
    currentData = data;
    //return {type: 'HANDLE_VIDEO_SEARCH', data: data};
  });
  var searchActionCreator = () => {
    return {type: 'HANDLE_VIDEO_SEARCH', data: currentData};
  };
  return searchActionCreator;


  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
