const Types = require("../actionTypes");
const initialState = {
  bannerList: [],
  categoryFirstList: [],
  categorySecondList: [],
  categoryThreeList: [],
  hotList: [],
  selectedKeys: [],
  detailInfo: {},
  showProject: false,
  projectList: [],
  shoppCardList: [],

};

export default function querybannerList(state = initialState, action) {
  switch (action.type) {
    case Types.BANNER_GET:
      state.bannerList = action.data;
      return Object.assign({}, state);
    case Types.CATEGORY_GET:
      state.categoryFirstList = action.data.firstCategortList;
      state.categorySecondList = action.data.secondCategortList;
      state.categoryThreeList = action.data.threeCategortList;
      return Object.assign({}, state);
    case Types.HOTPRODUCT_GET:
      state.hotList = action.data;
      return Object.assign({}, state);
    case Types.CHANGE_CATEGORY_PRODUCT:
      let index = action.data.index;
      state.categoryFirstList[index].spuList = action.data.list;
      state.categoryFirstList[index].selectKeys = action.data.id;
      return Object.assign({}, state);
    case Types.PRODUCT_DETAIL:
      state.detailInfo = action.data;
      return Object.assign({}, state);
    case Types.PRODUCT_MODAL:
      state.showProject = action.data;
      return Object.assign({}, state);
    case Types.PROJECT_LIST:
      state.projectList = action.data;
      return Object.assign({}, state);
    case Types.CARD_LIST:
        state.shoppCardList = action.data;
        return Object.assign({}, state);
      
    default:
      return state;
  }
}
