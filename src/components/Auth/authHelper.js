import axios from 'axios';
const baseUrl = 'https://jc-backend.herokuapp.com';

const register = async (user_data, props) => {
  try{
    const res = await axios({
      method: 'post',
      url: `${baseUrl}/api/user/register`,
      data: user_data,
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if(res.data.token){
      await localStorage.setItem('token', res.data.token);
      await localStorage.setItem('user_info', JSON.stringify(res.data.userInfo));

      return {status: true, result: res.data};
    }
    //props.history.push('/profile');
    return JSON.parse(res.data);
  } catch (error) {
    return {status: false, message: 'email already taken'};
  }
}

const login = async (user_data, props) => {
  try {
    const res = await axios({
      method: 'post',
      url: `${baseUrl}/api/user/login`,
      data: user_data,
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if(res.data.token){
      await localStorage.setItem('token', res.data.token);
      await localStorage.setItem('user_info', JSON.stringify(res.data.userInfo));

      return {status: true, result: res.data};
    } else {
      return {status: false, message: 'check your credentials'};
    }
    //props.history.push('/profile');
  } catch(error) {
    return {status: false, message: 'check your credentials'};
  }
}

const updateData = async (id, user_data) => {
  try {
    const token = await localStorage.getItem('token');

    const res = await axios({
        method: 'patch',
        url: `${baseUrl}/api/user/update-profile/${id}`,
        data: user_data,
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
      });

    return {status: true, result: res.data};
  } catch (error) {
    return {status: false, result: 'unknown error occurred'};
  }
}

const getData = async (id) => {
  try {
    const token = await localStorage.getItem('token');

    const res = await axios({
        method: 'post',
        url: `${baseUrl}/api/user/get-data`,
        data: {
          id: id,
        },
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
      });

    return {status: true, result: res.data};
  } catch (error) {
    return {status: false, result: 'unknown error occurred'};
  }
}

const changePassword = async (id, old_password, new_password) => {
  try {
    const token = await localStorage.getItem('token');
    const res = await axios({
        method: 'post',
        url: `${baseUrl}/api/user/change-password`,
        data: {
          id: id,
          old_password: old_password,
          current_password: new_password
        },
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
      });

    if(res.data.status) {
      return {status: true, result: res.data};
    } else {
      return {status: false, result: 'check your entered old password'};
    }
  } catch (error) {
    return {status: false, result: 'unknown error occurred'};
  }
}

export { register, login, updateData, getData, changePassword };
