const cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'dirtjkiyy', 
  api_key: '949477449327879', 
  api_secret: 'mEUAteL58d-i1L8A5NA-QXu2_1g' 
});

exports.uploads = (file) =>{
  return new Promise(resolve => {
    cloudinary.uploader.upload(file, (result) =>{
      console.log({url: result.url, id: result.public_id});
      resolve({url: result.url, id: result.public_id})
    }, {resource_type: "auto"})
  })
}