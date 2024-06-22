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

export const Edit = styled.div`
  color: #fff;
  font-family: "SUIT Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
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
