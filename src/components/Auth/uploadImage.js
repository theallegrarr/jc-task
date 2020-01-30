const cloudinary = require('cloudinary');

const uploadImage = async (path) => {
  return new Promise((resolve, reject) => {
    cloudinary.config({ 
      cloud_name: 'dirtjkiyy', 
      api_key: '949477449327879', 
      api_secret: 'mEUAteL58d-i1L8A5NA-QXu2_1g' 
    });

    cloudinary.uploader.upload(path, function(error, result) {
      resolve(result);
      if(error)reject(error);
    }); 
  }).catch((error) => {
    throw new Error(error);
  });
}

module.exports(uploadImage);