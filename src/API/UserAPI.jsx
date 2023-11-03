import axiosClient from "./axiosClient";

const UserAPI = {
  getDetailData: (id) => {
    const url = `/users/username?userId=${id}`;
    return axiosClient.get(url);
  },
  getUser: (id) => {
    const url = `/users/user/fetch?userId=${id}`;
    return axiosClient.get(url);
  },

  postSignUp: (query) => {
    const url = `/users/signup/${query}`;
    return axiosClient.post(url);
  },
  postLogin: (query) => {
    const url = `/users/login/${query}`;
    return axiosClient.post(url);
  },
  postUpdateInfor: (body, token) => {
    const url = `/users/update`;
    return axiosClient.post(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  postChangePassword: (body, token) => {
    const url = `/users/changepassword`;
    return axiosClient.post(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default UserAPI;
