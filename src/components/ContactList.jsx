//search 적용
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  //search할때 쓰이는 keyword값도 받아옴
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      //키워드가(서치에서) 입력이 되었을때
      let book = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(book);
    } else {
      //입력값이 없을때
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <div>
      <SearchBox />
      <div>
        인원 : {filteredList.length} 명
        {filteredList.map((item) => (
          <ContactItem item={item} />
          //서치 적용후 필터링 된 리스트
        ))}
      </div>
    </div>
  );
};

export default ContactList;
