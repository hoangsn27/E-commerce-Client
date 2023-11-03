import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserAPI from "../API/UserAPI";
import { useSelector } from "react-redux";

function Name(props) {
  const [name, setName] = useState("");

  const userId = useSelector((state) => state.Session.idUser);
  useEffect(() => {
    const fetchData = async () => {
      const response = await UserAPI.getDetailData(userId);
      setName(response);
    };

    fetchData();
  }, []);

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        style={{ cursor: "pointer" }}
        id="pagesDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fas fa-user-alt mr-1 text-gray"></i>
        {name}
      </a>
      <div className="dropdown-menu mt-3" aria-labelledby="pagesDropdown">
        <Link
          className="dropdown-item border-0 transition-link"
          to={"/information"}
        >
          Thông Tin Cá Nhân
        </Link>
        <Link
          className="dropdown-item border-0 transition-link"
          to={"/history"}
        >
          Lịch Sử Mua Hàng
        </Link>
      </div>
    </li>
  );
}

export default Name;
