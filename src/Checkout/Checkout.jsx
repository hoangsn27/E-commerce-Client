import React, { useEffect, useState } from "react";
import queryString from "query-string";
import CartAPI from "../API/CartAPI";
import Image from "../Share/img/Image";
import CheckoutAPI from "../API/CheckoutAPI";
import convertMoney from "../convertMoney";

import io from "socket.io-client";
const socket = io("http://localhost:5000", { transports: ["websocket"] });

function Checkout(props) {
  const token = localStorage.getItem("token");

  const [carts, setCarts] = useState([]);

  const [total, setTotal] = useState(0);

  const [fullname, setFullname] = useState("");
  const [fullnameError, setFullnameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [emailRegex, setEmailRegex] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);

  const [payment, setPayment] = useState("");
  const [paymentError, setPaymentError] = useState(false);

  const [success, setSuccess] = useState(false);

  //Hàm này dùng để gọi API và render số sản phẩm
  useEffect(() => {
    if (localStorage.getItem("id_user")) {
      const fetchData = async () => {
        const params = {
          userId: localStorage.getItem("id_user"),
        };

        const query = "?" + queryString.stringify(params);

        const response = await CartAPI.getCarts(query, token);

        setCarts(response);

        getTotal(response);

        if (response.length === 0) {
          window.location.replace("/cart");
        }
      };

      fetchData();
    }
  }, []);

  //Hàm này dùng để tính tổng tiền carts
  function getTotal(carts) {
    let sub_total = 0;

    const sum_total = carts.map((value) => {
      return (sub_total +=
        parseInt(value.productId.price) * parseInt(value.quantity));
    });

    setTotal(sub_total);
  }

  //Check Validation
  const handlerSubmit = () => {
    if (!fullname) {
      setFullnameError(true);
      setEmailError(false);
      setPhoneError(false);
      setAddressError(false);
      setPaymentError(false);
      return;
    } else {
      if (!email) {
        setFullnameError(false);
        setEmailError(true);
        setPhoneError(false);
        setAddressError(false);
        setPaymentError(false);
        return;
      } else {
        setPhoneError(false);
        setAddressError(false);
        setFullnameError(false);
        setPaymentError(false);

        if (!validateEmail(email)) {
          setEmailRegex(true);
          setFullnameError(false);
          setEmailError(false);
          setPhoneError(false);
          setAddressError(false);
          return;
        } else {
          setEmailRegex(false);

          if (!phone) {
            setFullnameError(false);
            setEmailError(false);
            setPhoneError(true);
            setAddressError(false);
            setPaymentError(false);
            return;
          } else {
            setFullnameError(false);
            setEmailError(false);
            setPhoneError(false);
            setAddressError(false);
            setPaymentError(false);

            if (!address) {
              setFullnameError(false);
              setEmailError(false);
              setPhoneError(false);
              setAddressError(true);
              setPaymentError(false);
              return;
            } else {
              setFullnameError(false);
              setEmailError(false);
              setPhoneError(false);
              setAddressError(false);
              setPaymentError(false);
              if (payment === "" || payment === "Select Payment Method") {
                setFullnameError(false);
                setEmailError(false);
                setPhoneError(false);
                setAddressError(false);
                setPaymentError(true);
              } else {
                setPaymentError(false);
                console.log("Thanh Cong");

                const body = {
                  userId: localStorage.getItem("id_user"),
                  email: email,
                  fullname: fullname,
                  phone: phone,
                  address: address,
                  payment: payment,
                  date: new Date(),
                  products: carts,
                  total: total,
                };

                // const newQuery = queryString

                const postOrder = async () => {
                  const response = await CheckoutAPI.postOrder(body, token);
                  console.log(response);
                };
                postOrder();

                // gửi socket lên server :
                const data = localStorage.getItem("id_user");
                socket.emit("send_order", data);

                setSuccess(!success);
              }
            }
          }
        }
      }
    }
  };

  const onChangeName = (e) => {
    setFullname(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  console.log(payment);
  return (
    <div>
      <div className="container">
        <section
          className="hero pb-3 bg-cover bg-center d-flex align-items-center"
          style={{ backgroundImage: `url(${Image.banner})` }}
        >
          <div className="container py-5">
            <div className="row px-4 px-lg-5">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Thanh Toán</h1>

                <p className="text-muted text-uppercase mb-2">
                  Cuối Cùng, Hãy Cho Chúng Tôi Thông Tin Liên Hệ Của Bạn
                </p>
              </div>
            </div>
          </div>
        </section>

        {!success && (
          <section className="py-5">
            <h2 className="h5 text-uppercase mb-4">Chi Tiết Thanh Toán</h2>
            <div className="row">
              <div className="col-lg-8">
                <form>
                  <div className="row">
                    <div className="col-lg-12 form-group">
                      <label
                        className="text-small text-uppercase"
                        htmlFor="Fullname"
                      >
                        Họ Và Tên:
                      </label>
                      <input
                        className="form-control form-control-lg"
                        value={fullname}
                        onChange={onChangeName}
                        type="text"
                        placeholder="Enter Your Full Name Here!"
                      />
                      {fullnameError && (
                        <span className="text-danger">
                          * Hãy Nhập Tên Của Bạn!
                        </span>
                      )}
                    </div>
                    <div className="col-lg-12 form-group">
                      <label
                        className="text-small text-uppercase"
                        htmlFor="Email"
                      >
                        Email:{" "}
                      </label>
                      <input
                        className="form-control form-control-lg"
                        value={email}
                        onChange={onChangeEmail}
                        type="text"
                        placeholder="Enter Your Email Here!"
                      />
                      {emailError && (
                        <span className="text-danger">* Hãy Nhập E-mail!</span>
                      )}
                      {emailRegex && (
                        <span className="text-danger">
                          * E-mail Không Đúng Định Dạng
                        </span>
                      )}
                    </div>
                    <div className="col-lg-12 form-group">
                      <label
                        className="text-small text-uppercase"
                        htmlFor="Phone"
                      >
                        Số Điện Thoại:{" "}
                      </label>
                      <input
                        className="form-control form-control-lg"
                        value={phone}
                        onChange={onChangePhone}
                        type="text"
                        placeholder="Enter Your Phone Number Here!"
                      />
                      {phoneError && (
                        <span className="text-danger">
                          * Hãy Nhập Số Điện Thoại!
                        </span>
                      )}
                    </div>
                    <div className="col-lg-12 form-group">
                      <label
                        className="text-small text-uppercase"
                        htmlFor="Address"
                      >
                        Địa Chỉ:{" "}
                      </label>
                      <input
                        className="form-control form-control-lg"
                        value={address}
                        onChange={onChangeAddress}
                        type="text"
                        placeholder="Enter Your Address Here!"
                      />
                      {addressError && (
                        <span className="text-danger">* Hãy Nhập Địa Chỉ!</span>
                      )}
                    </div>
                    <div className="col-lg-12 form-group">
                      <label
                        className="text-small text-uppercase"
                        htmlFor="payMethod"
                      >
                        Phương Thức Thanh Toán:{" "}
                      </label>
                      <select
                        className="form-control form-control-lg"
                        onChange={(e) => {
                          setPayment(e.target.value);
                        }}
                      >
                        <option>Select Payment Method</option>
                        <option>Credit Card</option>
                        <option>Tiền Mặt</option>
                      </select>
                      {paymentError && (
                        <span className="text-danger">
                          * Hãy Chọn Một Phương Thức Thanh Toán!
                        </span>
                      )}
                    </div>
                    {payment === "Credit Card" && (
                      <div className="col-lg-12 form-group">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="Enter Your Card Number!"
                        />
                      </div>
                    )}

                    <div className="col-lg-12 form-group">
                      <a
                        className="btn btn-dark"
                        style={{ color: "white" }}
                        type="submit"
                        onClick={handlerSubmit}
                      >
                        Đặt Hàng
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 rounded-0 p-lg-4 bg-light">
                  <div className="card-body">
                    <h5 className="text-uppercase mb-4">Đơn Hàng Của Bạn</h5>
                    <ul className="list-unstyled mb-0">
                      {carts &&
                        carts.map((value) => (
                          <div key={value._id}>
                            <li className="d-flex align-items-center justify-content-between">
                              <strong className="small font-weight-bold">
                                {value.productId.name}
                              </strong>
                              <br></br>
                              <span className="text-muted small">
                                {convertMoney(value.productId.price)} VND x{" "}
                                {value.quantity}
                              </span>
                            </li>
                            <li className="border-bottom my-2"></li>
                          </div>
                        ))}
                      <li className="d-flex align-items-center justify-content-between">
                        <strong className="text-uppercase small font-weight-bold">
                          Tổng Thanh Toán
                        </strong>
                        <span>{convertMoney(total)} VND</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {success && (
          <section className="py-5">
            <div className="p-5">
              <h1>Bạn Đã Đặt Hàng Thành Công!</h1>
              <p style={{ fontSize: "1.2rem" }}>
                Hãy Kiểm Tra Đơn Hàng Trong E-mail Của Bạn.
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Checkout;
