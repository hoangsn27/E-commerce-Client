import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import UserAPI from "../API/UserAPI";
import "./Auth.css";
import queryString from "query-string";
import MessengerAPI from "../API/MessengerAPI";

SignUp.propTypes = {};

function SignUp(props) {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [errorEmail, setEmailError] = useState(false);
  const [emailRegex, setEmailRegex] = useState(false);
  const [errorPassword, setPasswordError] = useState(false);
  const [errorFullname, setFullnameError] = useState(false);
  const [errorPhone, setPhoneError] = useState(false);

  const [resMessage, setResMessage] = useState("");

  const [success, setSuccess] = useState(false);

  const onChangeName = (e) => {
    setFullName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handlerSignUp = (e) => {
    e.preventDefault();

    if (!fullname) {
      setFullnameError(true);
      setEmailError(false);
      setPhoneError(false);
      setPasswordError(false);
      setEmailRegex(false);
      return;
    } else {
      setFullnameError(false);
      setPhoneError(false);
      setPasswordError(false);
      setFullnameError(false);
      setEmailRegex(false);

      if (!email) {
        setFullnameError(false);
        setEmailError(true);
        setPhoneError(false);
        setPasswordError(false);
        return;
      } else {
        setEmailError(false);
        setPhoneError(false);
        setPasswordError(false);
        setFullnameError(false);

        if (!validateEmail(email)) {
          setEmailRegex(true);
          setFullnameError(false);
          setEmailError(false);
          setPhoneError(false);
          setPasswordError(false);
          return;
        } else {
          setEmailRegex(false);

          if (!password) {
            setFullnameError(false);
            setEmailError(false);
            setPhoneError(false);
            setPasswordError(true);
            return;
          } else {
            setFullnameError(false);
            setPhoneError(false);
            setPasswordError(false);
            setFullnameError(false);
            setEmailRegex(false);

            if (!phone) {
              setFullnameError(false);
              setEmailError(false);
              setPhoneError(true);
              setPasswordError(false);
            } else {
              const fetchSignUp = async () => {
                const params = {
                  fullname: fullname,
                  email: email,
                  password: password,
                  phone: phone,
                };

                const query = "?" + queryString.stringify(params);

                const response = await UserAPI.postSignUp(query);

                console.log(response);
                if (response.status === 200) {
                  setSuccess(true);
                }
                setResMessage(response);
              };

              fetchSignUp();

              // Hàm này dùng để tạo các conversation cho user và admin
              // const fetchConversation = async () => {
              //   const params = {
              //     email: email,
              //     password: password,
              //   };

              //   const query = "?" + queryString.stringify(params);

              //   const response = await MessengerAPI.postConversation(query);
              //   console.log(response);
              // };

              // fetchConversation();
            }
          }
        }
      }
    }
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
          <span className="login100-form-title p-b-33">Đăng Ký</span>
          <div className="d-flex justify-content-center pb-5">
            {errorFullname && (
              <span className="text-danger">* Hãy Điền Tên Của Bạn!</span>
            )}
            {resMessage.status === 422 && (
              <span className="text-danger">{resMessage.errorMessage}</span>
            )}
            {errorEmail && (
              <span className="text-danger">* Hãy Nhập E-mail Của Bạn!</span>
            )}
            {emailRegex && (
              <span className="text-danger">* E-mail Không Đúng Định Dạng</span>
            )}
            {errorPassword && (
              <span className="text-danger">* Hãy Nhập Mật Khẩu!</span>
            )}
            {errorPhone && (
              <span className="text-danger">* Hãy Nhập Số Điện Thoại!</span>
            )}
          </div>
          <div className="wrap-input100 validate-input">
            <input
              className="input100"
              value={fullname}
              onChange={onChangeName}
              type="text"
              placeholder="Họ Và Tên"
            />
          </div>

          <div className="wrap-input100 rs1 validate-input">
            <input
              className="input100"
              value={email}
              onChange={onChangeEmail}
              type="text"
              placeholder="E-mail"
            />
          </div>

          <div className="wrap-input100 rs1 validate-input">
            <input
              className="input100"
              value={password}
              onChange={onChangePassword}
              type="password"
              placeholder="Mật Khẩu"
            />
          </div>

          <div className="wrap-input100 rs1 validate-input">
            <input
              className="input100"
              value={phone}
              onChange={onChangePhone}
              type="text"
              placeholder="Số Điện Thoại"
            />
          </div>

          <div className="container-login100-form-btn m-t-20">
            {success && <Redirect to={"/signin"} />}
            <button className="login100-form-btn" onClick={handlerSignUp}>
              Đăng Ký
            </button>
          </div>

          <div className="text-center p-t-45 p-b-4">
            <span className="txt1">Đăng Nhập?</span>
            &nbsp;
            <Link to="/signin" className="txt2 hov1">
              Click
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
