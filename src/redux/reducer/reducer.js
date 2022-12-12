//행동지침
let initialState = { contactList: [], keyword: "" }; //새 state추가

function reducer(state = initialState, action) {
  let { type, payload } = action; //action재분해 이용
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;

    case "SEARCH_BY_NAME": //케이스 새로 추가
      state.keyword = payload.keyword;
      break;
  }
  return { ...state };
}

export default reducer;
