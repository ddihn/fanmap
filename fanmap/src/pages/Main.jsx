import React from "react";
import { useNavigate } from "react-router-dom";
import N from "../css/StyledMain.module.css";

function Main() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    console.log("Menu clicked");
    navigate("/menu");
  };

  const handleListClick = () => {
    console.log("List clicked");
    navigate("/placelist");
  };

  return (
    <div className={N.container}>
      <img
        src="/img/main_bg.png"
        alt="bg"
        className={N.bg}
        onClick={handleMenuClick}
      />
      <input
        type="text"
        className={N.searchbar}
        placeholder="검색어를 입력하세요"
      />
      <div className={N.lens}></div>

      <div className={N["btn-wrapper"]}>
        <div className={N.menu}>
          <img src="/img/menu.png" alt="menu" />
        </div>
        <div className={N.community}>
          <img src="/img/community.png" alt="community" />
        </div>
        <div className={N.main}>
          <img src="/img/ellipse.png" alt="ellipse" />
          <img src="/img/main.png" alt="main" className={N.mainlogo} />
        </div>
        <div className={N.list} onClick={handleListClick}>
          <img src="/img/list.png" alt="list" />
        </div>
      </div>
    </div>
  );
}

export default Main;
