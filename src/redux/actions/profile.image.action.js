import { UPDATE_USER_PROFILE_IMAGE } from '../types';
import axios from 'axios';
import { setAlert as createAlert } from './alerts.action';
import { openModalUpdateUserImageProfile } from './ui.action';

export const addProfilImage = (file, fileName) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  try {
    const res = await axios.post('api/image/profile/upload', file, config);
    console.log(res.data);
    dispatch({
      type: UPDATE_USER_PROFILE_IMAGE,
      payload: res.data.filename,
    });

    if (fileName !== null && fileName !== '' && fileName !== undefined) {
      await axios.delete(`/api/image/profile/${fileName}`);
    }
    dispatch(openModalUpdateUserImageProfile(false));
    dispatch(
      createAlert({
        message: 'Was updated profile image!!',
        variant: 'success',
      })
    );
  } catch (error) {
    console.log(error);
    dispatch(
      createAlert({
        message: 'Error when try to save the image!',
        variant: 'danger',
      })
    );
  }
};
