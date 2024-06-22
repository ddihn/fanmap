import React from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/styledList";
import { ListItem, StyledList } from "../styles/styledCommunity";

const List = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  return (
    <L.Container>
      <L.Nav>
        <L.BackBtn onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/goBack.svg`}
            alt="goBack"
          />
        </L.BackBtn>
        <L.Title>
          <img
            id="myList"
            src={`${process.env.PUBLIC_URL}/images/star2.svg`}
            alt="list"
          />
          내 리스트
        </L.Title>
        <L.Edit>편집</L.Edit>
      </L.Nav>
      <L.Content>
        <StyledList>
          <ListItem></ListItem>
        </StyledList>
      </L.Content>
    </L.Container>
  );
};

export default List;
