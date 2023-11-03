import axiosClient from "./axiosClient";

const CommentAPI = {
  getCommentProduct: (query) => {
    const url = `/comment/fetch${query}`;
    return axiosClient.get(url);
  },

  postCommentProduct: (query, token) => {
    const url = `/comment/send${query}`;
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

export default CommentAPI;
