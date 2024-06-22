import { styled } from "styled-components";
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 390px;
  height: 100vh;
  background: #402846;
`;
export const BackBtn = styled.div`
  color: #fff;
  padding-left: 30px; /* 왼쪽 여백 */
  padding-top: 15px;
`;
export const Nav = styled.div`
  display: flex; /* 요소들을 가로로 나란히 배치하기 위해 flex 사용 */
  justify-content: space-between; /* 요소들 사이의 간격을 동일하게 배치 */

  width: 390px;
  height: 7vh;
  flex-shrink: 0;
  background: linear-gradient(96deg, #402846 54.12%, #e42a89 96.19%);
`;
export const Title = styled.div`
  display: flex; /* 자식 요소들을 가로로 나란히 배치 */
  align-items: center; /* 자식 요소들을 세로로 가운데 정렬 */
  color: #fff;
  font-family: "SUIT Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  img {
    margin-right: 10px; /* 이미지 오른쪽에 공백 추가 */
  }
`;
export const Write = styled.div`
  color: #fff;
  padding: 10px;
  padding-right: 30px; /* 오른쪽 여백 */

  padding-top: 15px;
`;
export const Content = styled.div`
  width: 350px;
  height: 93vh;
  padding: 23px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Content1 = styled.div`
  flex: 1;
  width: 343px;
  border-radius: 15px;
  background: #fff;
  position: relative;
  padding-left: 55px;
  padding-top: 40px;
  padding-bottom: 20px;
  box-sizing: border-box;
`;
export const C1 = styled.div`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 34px;
  position: absolute;
  top: 11px;
  left: 12px;
`;
export const C2 = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  top: 15px;
  left: 56px;
`;
export const C3 = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  position: absolute;
  top: 25px;
  left: 56px;
`;
export const C4 = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  position: absolute;
  top: 16px;
  right: 15px;
`;
export const C5 = styled.div`
  color: #000;
  font-family: "SUIT Variable";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const C6 = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const C7 = styled.div`
  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    padding: 0;
  }
`;

export const Content2 = styled.div`
  width: 343px;
  height: 486px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #fff;
`;
export const StyledList = styled.div`
  list-style-type: none; /* 리스트 마커 제거 */
  padding: 0; /* 내부 패딩 제거 */
`;

export const ListItem = styled.div`
  justify-content: space-between; /* 아이템들 사이의 간격을 동일하게 배치 */
  align-items: center; /* 아이템들을 세로로 가운데 정렬 */
  margin-bottom: 20px; /* 아이템들 사이의 간격 */
`;
