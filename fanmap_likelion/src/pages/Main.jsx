import React from "react";
import { useNavigate } from "react-router-dom";
import * as Ma from "../styles/styledMain";

const Main = () => {
  const navigate = useNavigate();
  const goList = () => {
    navigate("/list");
  };
  const goCommunity = () => {
    navigate("/community");
  };
  return (
    <Ma.Container>
      <Ma.CommunityBtn onClick={goCommunity}>
        <img
          src={`${process.env.PUBLIC_URL}/images/commuIcon.svg`}
          alt="community Botton"
        />
      </Ma.CommunityBtn>
      <Ma.ListBtn onClick={goList}>
        <img
          src={`${process.env.PUBLIC_URL}/images/listIcon.svg`}
          alt="community Botton"
        />
      </Ma.ListBtn>
    </Ma.Container>
  );
};
export default Main;
