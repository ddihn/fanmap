import React from "react";
import { Link } from "react-router-dom";
import L from "../css/StyledLoginPage.module.css";

function LoginPage() {
  return (
    <div className={L.container}>
      <img src="img/login_bg.png" alt="bg" />
      <div className={L.form}>
        <img className={L.logo} src="/img/logo.png" alt="logo" />
        <div className={L["logo-text"]}>FANMAP</div>
        <div className={L["login-wrapper"]}>
          <input
            className={L["login-box"]}
            name="id"
            type="text"
            placeholder="아이디"
          />
          <input
            className={L["login-box"]}
            name="pw"
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <Link to="/membership" className={L["mem-join-btn"]}>
          회원가입
        </Link>
        <div className={L["login-btn"]}>로그인</div>
        <div className={L.find}>
          <div className={L["find-id"]}>
            아이디 찾기<span className={L.line}>|</span>
          </div>
          <div className={L["find-pw"]}>비밀번호 찾기</div>
        </div>
        <div className={L["login-platform-wrapper"]}>
          <div className={L["login-google"]}>구글로 로그인</div>
          <div className={L["login-kakao"]}>카카오톡으로 로그인</div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
