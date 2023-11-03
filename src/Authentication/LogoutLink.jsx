import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteSession } from "../Redux/Action/ActionSession";

function LogoutLink(props) {
  const dispatch = useDispatch();
  const action = deleteSession("");
  dispatch(action);

  return (
    <li className="nav-item">
      <Link className="nav-link" to={`/signin`}>
        <i className="fas fa-user-alt mr-1 text-gray"></i>Đăng Nhập
      </Link>
    </li>
  );
}

export default LogoutLink;
