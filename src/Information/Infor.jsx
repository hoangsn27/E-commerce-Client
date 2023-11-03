import { useEffect, useState } from "react";
import UserAPI from "../API/UserAPI";
import Image from "../Share/img/Image";
import alertify from "alertifyjs";

function Infor() {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("id_user");
  const expiryDate = localStorage.getItem("expiryDate");
  const timeRemaining = new Date(expiryDate).getTime() - new Date().getTime();

  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [loaded, setLoaded] = useState(false);

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();

  const [openInfor, setOpenInfor] = useState(true);
  const [openChagePassword, setOpenChangePassword] = useState(false);

  useEffect(() => {
    if (!expiryDate) {
      return window.location.replace("/signin");
    }

    // auto logout when expirydate token
    const autoLogout = (miliseconds) => {
      setTimeout(() => {
        localStorage.clear();
        window.location.replace("/signin");
      }, miliseconds);
    };

    autoLogout(timeRemaining);
  }, [timeRemaining]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const getUser = async () => {
      const response = await UserAPI.getUser(userId);
      setFullname(response.fullname);
      setEmail(response.email);
      setPhone(response.phone);
      setLoaded(true);
    };
    getUser();
  }, [userId]);

  const updateInforHandler = async () => {
    const params = {
      userId: userId,
      fullname: fullname,
      email: email,
      phone: phone,
    };

    const response = await UserAPI.postUpdateInfor(params, token);

    console.log(response);
    if (response.statusCode === 200) {
      alertify.set("notifier", "position", "bottom-right");
      alertify.success(response.message);
    }
    if (response.statusCode === 401 || response.statusCode === 422) {
      alertify.set("notifier", "position", "bottom-right");
      alertify.error(response.message);
    }
  };

  const chagePasswordHandler = async () => {
    const params = {
      userId: userId,
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword,
    };

    const response = await UserAPI.postChangePassword(params, token);

    console.log(response);
    if (response.statusCode === 200) {
      alertify.set("notifier", "position", "bottom-right");
      alertify.success(response.message);
    }
    if (response.statusCode === 401 || response.statusCode === 422) {
      alertify.set("notifier", "position", "bottom-right");
      alertify.error(response.message);
    }
  };

  return (
    <div className="container">
      <section
        className="hero pb-3 bg-cover bg-center d-flex align-items-center"
        style={{ backgroundImage: `url(${Image.banner})` }}
      >
        <div className="container py-5">
          <div className="row px-4 px-lg-5">
            <div className="col-lg-6">
              <h1 className="h2 text-uppercase mb-3">Thông Tin Cá Nhân</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-light mt-4">
        <div className="p-5">
          <ul className="d-flex">
            <li>
              <button
                type="button"
                className={`${
                  openInfor ? "btn btn-warning border " : "btn btn-dark"
                }`}
                onClick={() => {
                  setOpenInfor(true);
                  setOpenChangePassword(false);
                }}
              >
                Thông Tin Cá Nhân
              </button>
            </li>
            <li>
              {" "}
              <button
                type="button"
                className={`${
                  openChagePassword
                    ? "btn btn-warning border ml-3 "
                    : "btn btn-dark ml-3"
                }`}
                onClick={() => {
                  setOpenChangePassword(true);
                  setOpenInfor(false);
                }}
              >
                Đổi Mật Khẩu
              </button>
            </li>
          </ul>
        </div>
        {openInfor && loaded && (
          <div className="container p-5">
            <div className="row">
              <div className="mb-5 col-lg-6 d-flex justify-content-between ">
                <label className="ml-5 pl-5" htmlFor="username ">
                  Họ Và Tên:
                </label>
                <input
                  className=" p-2 rounded bg-dark text-white "
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
              </div>
              <div className=" mb-5 col-lg-6  d-flex justify-content-between">
                <label className="ml-5 pl-5">E-mail:</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="ml-3 p-2 rounded bg-dark text-white"
                  value={email}
                />
              </div>
              <div className="mb-5 col-lg-6 d-flex justify-content-between">
                <label className="ml-5 pl-5">Số Điện Thoại:</label>
                <input
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className="ml-3 p-2 rounded bg-dark text-white"
                  value={phone}
                />
              </div>
              <div className="col-lg-12  d-flex justify-content-center">
                <button
                  onClick={updateInforHandler}
                  className=" w-20 btn btn-dark rounded"
                >
                  Cập Nhật
                </button>
              </div>
            </div>
          </div>
        )}
        {openChagePassword && loaded && (
          <div className="contaier pb-5">
            <div className="d-flex flex-column justify-content-center">
              <div className="row mb-3">
                <div className="col-lg-6 d-flex justify-content-between">
                  <label className="ml-5 pl-5">Mật Khẩu Cũ:</label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setOldPassword(e.target.value);
                    }}
                    className="ml-3 p-2 rounded bg-dark text-white"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-6 d-flex justify-content-between">
                  <label className="ml-5 pl-5">Mật Khẩu Mới:</label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                    className="ml-3 p-2 rounded bg-dark text-white"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-6 d-flex justify-content-between">
                  <label className="ml-5 pl-5">Xác Nhận Mật Khẩu Mới:</label>
                  <input
                    onChange={(e) => {
                      setConfirmNewPassword(e.target.value);
                    }}
                    type="password"
                    className="ml-3 p-2 rounded bg-dark text-white"
                  />
                </div>
              </div>
              <div className="col-lg-12 d-flex justify-content-center">
                <button
                  onClick={chagePasswordHandler}
                  className=" w-20 btn btn-dark rounded"
                >
                  Cập Nhật
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Infor;
