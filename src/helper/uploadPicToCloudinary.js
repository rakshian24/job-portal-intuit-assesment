import axios from 'axios';

const uploadPic = async (media) => {
  try {
    const form = new FormData();
    form.append('file', media);
    form.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
    form.append('cloud_name', process.env.REACT_APP_CLOUD_NAME);

    const response = await axios.post(
      process.env.REACT_APP_CLOUDINARY_URL,
      form,
    );

    return response.data.url;
  } catch (error) {
    return;
  }
};

export default uploadPic;
