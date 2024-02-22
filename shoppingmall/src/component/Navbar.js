import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // 올바르게 useNavigate를 import 합니다.

const Navbar = () => {
  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"];

  const navigate = useNavigate(); // 'useNavigate' 훅을 사용하고, 변수 이름을 소문자로 시작합니다.
  const goToLogin = () => {
    navigate("/login"); // 'navigate' 함수를 사용하여 경로를 변경합니다.
  };

  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>

      <div className="nav-section">
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrj74nMPwElslum3869NIDVx_vUcR6cgTgim7XjpAXYA&s"
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="Search-input">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
