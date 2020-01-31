import React, { useState } from 'react';

export default function UploadImage({ updateForm }) {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();

    data.append('file', files[0]);
    data.append('upload_preset', 'theloo');
    setLoading(true);
    const res = await fetch(
      'http://api.cloudinary.com/v1_1/dirtjkiyy/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
    updateForm('image', file.secure_url);
  }

  return (
  <>
    <input 
      type='file'
      name='file'
      placeholder='select an image'
      onChange={uploadImage}
      />
      {loading && <p>uploading image, please wait...</p>}
      {image && <img src={image} alt='' style={{width: '300px'}}/>}
  </>);
}