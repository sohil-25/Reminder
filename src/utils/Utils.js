import {Dimensions} from 'react-native';

const standardWidth = 375.0;
const standardHeight = 767.0;

const screenWidth = Dimensions.get ('window').width;
const screenHeight = Dimensions.get ('window').height;

export function widthScale (dimensionWidth) {
  return dimensionWidth / standardWidth * screenWidth;
}

export function fontScale (dimensionWidth) {
  return dimensionWidth / standardWidth * screenWidth;  
}

export function heightScale (dimensionHeight) {
  return dimensionHeight / standardHeight * screenHeight;
}


export const errorHandling = error => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
  console.log(error.toJSON());
};


