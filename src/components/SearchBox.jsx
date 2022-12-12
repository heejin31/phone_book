import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import style from "./SearchBox.module.css";

const SearchBox = () => {
  let [keyword, setKeyword] = useState(""); //키워드값(입력값)을 인식하게
  let dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });
  };

  return (
    <form className={style.form} onSubmit={searchByName}>
      <Row>
        <Col xs>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Button variant="primary" type="submit">
            찾기
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default SearchBox;
