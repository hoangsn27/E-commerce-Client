import axiosClient from "./axiosClient";

const HistoryAPI = {
  getHistoryAPI: (query, token) => {
    const url = `/histories/fetch${query}`;

    return axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getDetail: (id, token) => {
    const url = `/histories/detail/fetch?orderId=${id}`;

    return axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default HistoryAPI;
