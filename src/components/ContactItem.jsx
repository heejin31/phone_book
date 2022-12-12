import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "./ContactItem.module.css";

const ContactItem = ({ item }) => {
  return (
    <div className={style.box}>
      <Row>
        <Col xs="auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Oa_PePE-4tm95TJQkXVULP-w439BNK3f7A&usqp=CAU"
            alt=""
          />
        </Col>
        <Col xs className={style.text}>
          <h5>{item.name}</h5>
          <p>{item.phoneNumber}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
