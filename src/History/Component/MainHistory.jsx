import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HistoryAPI from "../../API/HistoryAPI";
import queryString from "query-string";
import Image from "../../Share/img/Image";
import io from "socket.io-client";
const socket = io("https://e-commerce-server-tw4l.onrender.com", {
  transports: ["websocket"],
});

MainHistory.propTypes = {};

function MainHistory(props) {
  const token = localStorage.getItem("token");
  const [load, setLoad] = useState(false);
  const [listCart, setListCart] = useState([]);
  const userId = localStorage.getItem("id_user");

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        return;
      }
      if (userId) {
        const params = {
          userId: userId,
        };

        const query = "?" + queryString.stringify(params);

        const response = await HistoryAPI.getHistoryAPI(query, token);
        console.log(response);

        setListCart(response);
      }
    };

    fetchData();
  }, [userId, load]);

  useEffect(() => {
    if (load) {
      setLoad(false);
    }
    socket.on("receive_status", () => {
      setLoad(true);
    });
  }, [load]);

  return (
    <div className="container">
      <section
        className="hero pb-3 bg-cover bg-center d-flex align-items-center"
        style={{ backgroundImage: `url(${Image.banner})` }}
      >
        <div className="container py-5">
          <div className="row px-4 px-lg-5">
            <div className="col-lg-6">
              <h1 className="h2 text-uppercase mb-0">Lịch Sử Đơn Hàng</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="table-responsive pt-5 pb-5">
        <table className="table">
          <thead className="bg-light">
            <tr className="text-center">
              <th className="border-0 align-middle" scope="col">
                {" "}
                <strong className="text-small text-uppercase ">
                  ID Đơn Hàng
                </strong>
              </th>
              <th className="border-0 align-middle" scope="col">
                {" "}
                <strong className="text-small text-uppercase">
                  ID Người Dùng
                </strong>
              </th>
              <th className="border-0 align-middle" scope="col">
                {" "}
                <strong className="text-small text-uppercase">Tên</strong>
              </th>
              <th className="border-0 align-middle" scope="col">
                {" "}
                <strong className="text-small text-uppercase">
                  Số Điện Thoại
                </strong>
              </th>
              <th className="border-0 align-middle" scope="col">
                {" "}
                <strong className="text-small text-uppercase">Địa Chỉ</strong>
              </th>
              <th className="border-0 align-middle" scope="col">
                {" "}
                <strong className="text-small text-uppercase">
                  Tổng Thanh Toán
                </strong>
              </th>
              <th className="border-0 align-middle" scope="col">
                {" "}
                <strong className="text-small text-uppercase">
                  Phương Thức Thanh Toán
                </strong>
              </th>
              <th className="border-0 align-middle" scope="col">
                {" "}
                <strong className="text-small text-uppercase">
                  Ngày Đặt hàng
                </strong>
              </th>
              <th className="border-0 align-middle" scope="col">
                {" "}
                <strong className="text-small text-uppercase">
                  Trạng Thái
                </strong>
              </th>
              <th className="border-0 align-middle" scope="col">
                {" "}
                <strong className="text-small text-uppercase">Chi Tiết</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {listCart &&
              listCart.map((value) => (
                <tr className="text-center" key={value._id}>
                  <td className="align-middle border-0">
                    <p className="mb-0 small">{value._id}</p>
                  </td>
                  <td className="align-middle border-0">
                    <p className="mb-0 small">{value.userId}</p>
                  </td>
                  <td className="align-middle border-0">
                    <p className="mb-0 small">{value.fullname}</p>
                  </td>
                  <td className="align-middle border-0">
                    <p className="mb-0 small">{value.phone}</p>
                  </td>
                  <td className="align-middle border-0">
                    <p className="mb-0 small">{value.address}</p>
                  </td>
                  <td className="align-middle border-0">
                    <p className="mb-0 small">${value.total}</p>
                  </td>
                  <td className="align-middle border-0">
                    <p className="mb-0 small">{value.payment}</p>
                  </td>
                  <td className="align-middle border-0">
                    <p className="mb-0 small">{value.date.slice(0, 10)}</p>
                  </td>

                  <td className="align-middle border-0">
                    {value.status === 1 ? " Xác Nhận" : `Chờ Xác Nhận`}
                    {value.status === 1 && (
                      <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            opacity="0.4"
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            fill="#12dd0e"
                          ></path>{" "}
                          <path
                            d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                            fill="#12dd0e"
                          ></path>{" "}
                        </g>
                      </svg>
                    )}
                  </td>

                  <td className="align-middle border-0">
                    <Link
                      className="btn btn-outline-dark btn-sm"
                      to={`/history/${value._id}`}
                    >
                      Xem
                      <i className="fas fa-long-arrow-alt-right ml-2"></i>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainHistory;
