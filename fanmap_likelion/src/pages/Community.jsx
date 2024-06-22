import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/styledCommunity"; // 예시 파일명에 따라 수정해야 함

const Community = () => {
  const navigate = useNavigate();
  const [isIncrease, setIsIncrease] = useState(true);
  const [count, setCount] = useState(370);

  const goBack = () => {
    navigate("/");
  };

  const handleButtonClick = () => {
    if (isIncrease) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setIsIncrease(!isIncrease); // 속성을 반대로 변경
  };

  return (
    <C.Container>
      <C.Nav>
        <C.BackBtn onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/goBack.svg`}
            alt="goBack"
          />
        </C.BackBtn>
        <C.Title>
          <img
            src={`${process.env.PUBLIC_URL}/images/commuIcon_w.svg`}
            alt="community"
          />
          커뮤니티
        </C.Title>
        <C.Write>
          <img
            src={`${process.env.PUBLIC_URL}/images/penLiner.svg`}
            alt="penliner"
          />
        </C.Write>
      </C.Nav>
      <C.Content>
        <C.StyledList>
          <C.ListItem>
            <C.Content1>
              <C.C1>
                <img
                  src={`${process.env.PUBLIC_URL}/images/profileImage.svg`}
                  alt=""
                />
              </C.C1>
              <C.C2>nickname</C.C2>
              <C.C3>@aakw1234</C.C3>
              <C.C4>2024.04.13</C.C4>
              <C.C5>
                5월 10일 첫콘에서 우치와랑 미니 포카홀더 나눔합니다~,,
                <br />
                선착10분에게는 키링도 드립니다!! <br />
                자세한 정보는 인포 이미지 참고해주세요~!!! <br />
                맞팔 칭구들은 저 보시면 간식 드릴게요 불러주세요...
              </C.C5>
              <C.C6>
                <img
                  src={`${process.env.PUBLIC_URL}/images/gardanImage.png`}
                  alt=""
                />
              </C.C6>
              <C.C7>
                <button onClick={handleButtonClick}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/Star.svg`}
                    alt=""
                  />
                </button>
                {count}
              </C.C7>
            </C.Content1>
          </C.ListItem>
          <C.ListItem>
            <C.Content2></C.Content2>
          </C.ListItem>
        </C.StyledList>
      </C.Content>
    </C.Container>
  );
};

export default Community;
