import axiosClient from "./axiosClient";

const CartAPI = {
  getCarts: (query, token) => {
    const url = `/carts/fetch${query}`;

    return axiosClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  postAddToCart: (query, token) => {
    const url = `/carts/add${query}`;
    console.log(url);
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

  deleteToCart: (query, token) => {
    const url = `/carts/delete${query}`;
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

  putToCart: (query, token) => {
    const url = `/carts/update${query}`;
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
};

export default CartAPI;
