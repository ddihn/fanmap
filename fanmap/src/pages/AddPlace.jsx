import React from "react";
import { useNavigate } from "react-router-dom";
import A from "../css/StyledAddPlace.module.css";

function AddPlace() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  }; //함수
  return (
    <div className={A.container}>
      <div className={A.titleBar}>
        <img
          src="\img\backBtn.png"
          className={A.backBtn}
          alt="backBtn"
          onClick={handleBackClick}
        />
        <img className={A.placeicon} src="\img\placeicon.png" alt="placeicon" />
        내 장소 등록
        <div className={A.tempSaveBtn}>임시저장</div>
      </div>
      <div className={A.placeImg}>
        <img src="\img\place.png" alt="place" />
      </div>
      <div className={A.placeAddress}>
        <img src="\img\placepnt.png" alt="point" className={A.pnt} />
        <span className={A.address}>서울특별시 송파구 올림픽로 25</span>
        <div className={A.replaceBtn}>위치 재설정하기</div>
      </div>

      <div className={A.placeInfo}>
        <div className={A.placeName}>
          장소 이름
          <input
            placeholder="텍스트를 입력해주세요."
            className={A.inputBox}
            type="text"
          />
        </div>
        <div className={A.placePurpose}>
          <span className={A.pb}>장소의 목적</span>
          <input
            className={A.inputBox}
            type="text"
            placeholder="텍스트를 입력해주세요."
          />
        </div>
        <div className={A.time}>
          활성화 시간<span className={A.sp}>~</span>
          <input className={A.timeBox} type="time" />
          <input className={A.timeBox} type="time" />
        </div>
        <div className={A.categoryWp}>
          카테고리
          <select className={A.category}>
            <option value="none" selected>
              공유 대상
            </option>
            <option value="idol">아이돌</option>
            <option value="singer">가수</option>
            <option value="actor">배우</option>
            <option value="entertainer">예능인</option>
            <option value="athlete">운동선수</option>
            <option value="model">모델</option>
            <option value="2D">2D</option>
            <option value="etc-star">기타</option>
          </select>
          <select className={A.item}>
            <option value="none" selected>
              공유하는 대상
            </option>
            <option value="goods">굿즈</option>
            <option value="eat">먹거리</option>
            <option value="promise">약속</option>
            <option value="item">물품</option>
            <option value="etc">기타</option>
          </select>
        </div>
        <div className={A.condition}>
          필요 조건
          <input
            placeholder="텍스트를 입력해주세요."
            className={A.inputBox}
            type="text"
          />
        </div>
        <div className={A.additionalInfo}>
          추가 정보
          <input placeholder="외부링크" className={A.inputBox} type="text" />
        </div>
        <div className={A.img}>
          이미지
          <div className={A.filebox}>
            <label for="file">파일찾기</label>
            <input type="file" className={A.fileBox} />
          </div>
        </div>
      </div>
      <div className={A.addBtn}>내 장소 등록하기</div>
    </div>
  );
}

export default AddPlace;
