const Types = require("../actionTypes");
const initialState = {
  userInfo: {},
  projectList: [],
  nowProductId: 0,
};

export default function querybannerList(state = initialState, action) {
  switch (action.type) {
    case Types.USER_INFO:
      state.userInfo = action.data;
      return Object.assign({}, state);
    case Types.PROJECT_LIST:
      state.projectList = action.data;
      if (action.data && action.data.length > 0) {
        window.localStorage.setItem('projectId',action.data[0].id)
        // state.nowProductId = {
        //     id: action.data[0].id,
        //     name: action.data[0].name,
        // }
      }
      return Object.assign({}, state);
    default:
      return state;
  }
}
// getUserProject
