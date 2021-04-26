const Types = require("../actionTypes");
const initialState = {
  list: [],
  item: {},
};

export default function queryAddressList(state = initialState, action) {
  switch (action.type) {
    case Types.ADDRESS_LIST:
      state.list = action.data;
      return Object.assign({}, state);
    case Types.ADDRESS_DETAIL:
      state.item = action.data;
      return Object.assign({}, state);
    default:
      return state;
  }
}
