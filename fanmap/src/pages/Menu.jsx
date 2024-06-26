import React from "react";
import { useNavigate } from "react-router-dom";
import E from "../css/StyledMenu.module.css";

function Menu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className={E.container}>
      <img src="/img/main_bg.png" alt="bg" className={E.bg} />
      <input
        type="text"
        className={E.searchbar}
        placeholder="검색어를 입력하세요"
      />
      <div className={E.lens}></div>
      <div className={E.innerContainer}>
        <div className={E.menu}>
          <img src="/img/menu_nobg.png" alt="menu" className={E.menuicon} />
          Menu
        </div>
        <div className={E.menulist}>
          <div className={E.mypageTitle}>
            My Page
            <div className={E.modifyProfile}>프로필 수정</div>
          </div>
          <div className={E.mylistTitle}>
            내 리스트
            <div className={E.myPlaceList}>내 장소 리스트</div>
            <div className={E.myPostList}>내 글 리스트</div>
            <div className={E.myPostPlace}>내가 등록한 장소</div>
          </div>
          <div className={E.communityTitle}>
            커뮤니티
            <div className={E.myPost}>내가 쓴 글</div>
            <div className={E.wBtn}>글 작성하기</div>
          </div>
          <div className={E.logout} onClick={handleLogout}>
            로그아웃
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
