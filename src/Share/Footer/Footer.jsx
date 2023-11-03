/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer(props) {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-4">
        <div className="row py-5">
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="text-uppercase mb-3">Dịch Vụ</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a className="footer-link" href="#">
                  Trợ Giúp &amp; Liên Hệ
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Trả Hàng &amp; Hoàn Hàng
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Cửa Hàng Online
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Điều Khoản &amp; Điều Kiện
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="text-uppercase mb-3">Về Chúng Tôi</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a className="footer-link" href="#">
                  Chúng Tôi Là Gì
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Dịch Vụ Có Sẵn
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Bài Viết Mới Nhất
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Câu Hỏi Thường Gặp
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="text-uppercase mb-3">Liên Hệ</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a className="footer-link" href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
