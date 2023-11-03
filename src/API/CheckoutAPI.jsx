import axiosClient from "./axiosClient";

const CheckoutAPI = {
  postEmail: (query, token) => {
    const url = `/email${query}`;
    return axiosClient.post(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  },
  postOrder: (body, token) => {
    const url = `/orders`;
    return axiosClient.post(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default CheckoutAPI;
