import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import UserAPI from "../API/UserAPI";
import { addSession } from "../Redux/Action/ActionSession";
import "./Auth.css";
import queryString from "query-string";
import CartAPI from "../API/CartAPI";

function SignIn(props) {
  //listCart được lấy từ redux
  const listCart = useSelector((state) => state.Cart.listCart);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [user, setUser] = useState([]);

  const [errorEmail, setErrorEmail] = useState(false);
  const [emailRegex, setEmailRegex] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const [resMessage, setResMessage] = useState("");

  const [redirect, setRedirect] = useState(false);

  const [checkPush, setCheckPush] = useState(false);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setErrorEmail(true);
      return;
    } else {
      if (!password) {
        setErrorEmail(false);
        setErrorPassword(true);
        return;
      } else {
        setErrorPassword(false);

        if (!validateEmail(email)) {
          setEmailRegex(true);
          return;
        } else {
          setEmailRegex(false);

          const fetchLogin = async () => {
            const params = {
              email: email,
              password: password,
            };

            const query = "?" + queryString.stringify(params);

            const response = await UserAPI.postLogin(query);
            console.log(response);

            if (response.statusCode === 200) {
              localStorage.setItem("token", response.token);
              localStorage.setItem("id_user", response.userId);
              const timeRemaining = 1000 * 60 * 60 * 3;
              const expiryDate = new Date(new Date().getTime() + timeRemaining);
              localStorage.setItem("expiryDate", expiryDate.toISOString());
              const action = addSession(localStorage.getItem("id_user"));
              dispatch(action);
              setRedirect(true);
            }
            if (response.statusCode === 401 || response.statusCode === 422) {
              setResMessage(response.message);
            }
          };
          fetchLogin();
        }
      }
    }
  };

  //Hàm này dùng để đưa hết tất cả carts vào API của user
  // useEffect(() => {
  // 	const fetchData = async () => {
  // 		//Lần đầu sẽ không thực hiện insert được vì addCart = ''
  // 		if (checkPush === true) {
  // 			for (let i = 0; i < listCart.length; i++) {
  // 				//Nó sẽ lấy idUser và idProduct và count cần thêm để gửi lên server
  // 				const params = {
  // 					idUser: localStorage.getItem('id_user'),
  // 					idProduct: listCart[i].idProduct,
  // 					count: listCart[i].count,
  // 				};

  // 				const query = '?' + queryString.stringify(params);

  // 				const response = await CartAPI.postAddToCart(query);
  // 				console.log(response);
  // 			}

  // 			setRedirect(true);
  // 		}
  // 	};

  // 	fetchData();
  // }, [checkPush]);

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
          <span className="login100-form-title p-b-33">Đăng Nhập</span>

          <div className="d-flex justify-content-center pb-5">
            {resMessage && <span className="text-danger">* {resMessage}</span>}
            {emailRegex && (
              <span className="text-danger">* Email Không Đúng Định Dạng</span>
            )}
            {errorEmail && (
              <span className="text-danger">* Hãy Nhập E-mail</span>
            )}
            {errorPassword && (
              <span className="text-danger">* Hãy Nhập Mật Khẩu</span>
            )}
          </div>

          <div className="wrap-input100 validate-input">
            <input
              className="input100"
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={onChangeEmail}
            />
          </div>

          <div className="wrap-input100 rs1 validate-input">
            <input
              className="input100"
              type="password"
              placeholder="Mật Khẩu"
              value={password}
              onChange={onChangePassword}
            />
          </div>

          <div className="container-login100-form-btn m-t-20">
            {redirect && <Redirect to={`/`} />}
            <button className="login100-form-btn" onClick={onSubmit}>
              Đăng Nhập
            </button>
          </div>

          <div className="text-center p-t-45 p-b-4">
            <span className="txt1">Bạn Chưa Có Tài Khoản ?</span>
            &nbsp;
            <Link to="/signup" className="txt2 hov1">
              Đăng Ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
