import axiosClient from "./axiosClient";

const ProductAPI = {
  getAPI: () => {
    const url = "/products";
    return axiosClient.get(url);
  },

  getCategory: (query) => {
    const url = `/products/category/fetch?${query}`;
    return axiosClient.get(url);
  },

  getDetail: (id) => {
    const url = `/products/detail?id=${id}`;
    return axiosClient.get(url);
  },

  getPagination: (query) => {
    const url = `/products/pagination/fetch?${query}`;
    return axiosClient.get(url);
  },
};

export default ProductAPI;
