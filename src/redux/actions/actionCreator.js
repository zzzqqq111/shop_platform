import { api, request } from "@utils";
const {
  getBannerList,
  getCategoryList,
  getHotProductList,
  getProductListByCategory,
  getProductDetail,
  getUserInfoUrl,
  getUserProject,
  getShoppingCard
} = api;
const Types = require("../actionTypes");
export const getBannerData = () => {
  return (dispatch) => {
    request("get", getBannerList)
      .then((data) => {
        dispatch({ type: Types.BANNER_GET, data: data.data });
      })
      .catch((error) => console.log(error));
  };
};

export const getCategoryData = () => {
  return (dispatch) => {
    request("get", getCategoryList)
      .then((data) => {
        let newData = data.data || [];
        let data1 = [];
        let data2 = [];
        let data3 = [];
        newData.map((item, index) => {
          data1.push(item);
          let children1 = item.childrenCategory || [];
          data2[index] = children1 || [];
          data2.map((key, i) => {
            data3[i] = [];
            key.map((obj, tabIndex) => {
              let children2 = obj.childrenCategory || [];
              children2.map((ite) => {
                data3[i].push(ite);
              });
            });
          });
          // 获取当前分类下的商品
          if (children1[0] && children1[0].id) {
            data1[index].selectKeys = [`${children1[0].id}`];
            request("get", getProductListByCategory, {
              categoryId: children1[0].id,
            })
              .then((res) => {
                data1[index].spuList = [];
                if (res.code == 200) {
                  data1[index].spuList = res.data;
                }
                dispatch({
                  type: Types.CATEGORY_GET,
                  data: {
                    firstCategortList: data1,
                    secondCategortList: data2,
                    threeCategortList: data3,
                  },
                });
              })
              .catch((error) => console.log(error));
          }
        });
      })
      .catch((error) => console.log(error));
  };
};

// 热销商品
export const getHotProductData = () => {
  return (dispatch) => {
    request("get", getHotProductList)
      .then((data) => {
        dispatch({ type: Types.HOTPRODUCT_GET, data: data.data });
      })
      .catch((error) => console.log(error));
  };
};

// 根据分类获取商品
export const getProductByCategoryData = (params, index) => {
  return (dispatch) => {
    request("get", getProductListByCategory, params)
      .then((data) => {
        if (data.code === 200) {
          dispatch({
            type: Types.CHANGE_CATEGORY_PRODUCT,
            data: {
              list: data.data || [],
              index: index,
              id: params.categoryId,
            },
          });
        }
      })
      .catch((error) => console.log(error));
  };
};

// 获取详情
export const getProductDetailInfo = (params, index) => {
  return (dispatch) => {
    request("get", `${getProductDetail}/${params.id}`)
      .then((data) => {
        if (data.code === 200) {
          dispatch({ type: Types.PRODUCT_DETAIL, data: data.data });
        }
      })
      .catch((error) => console.log(error));
  };
};

// 获取头部信息
export const getUserInfo = (params, index) => {
  return (dispatch) => {
    request("get", `${getUserInfoUrl}`)
      .then((data) => {
        if (data.code === 200) {
          dispatch({ type: Types.USER_INFO, data: data.data });
        }
      })
      .catch((error) => console.log(error));
  };
};

// 获取用户项目
export const getUserProjectData = (params, index) => {
  return (dispatch) => {
    request("get", `${getUserProject}`)
      .then((data) => {
        if (data.code === 200) {
          dispatch({ type: Types.PROJECT_LIST, data: data.data });
        }
      })
      .catch((error) => console.log(error));
  };
};

// 切换项目
export const showProjectModal = (params) => {
  return (dispatch) => {
    dispatch({ type: Types.PRODUCT_MODAL, data: params });
  };
};


// 购物车
// 获取购物车
export const getShopCardList = (params, index) => {
  return (dispatch) => {
    request("get", `${getShoppingCard}`)
      .then((data) => {
        if (data.code === 200) {
          dispatch({ type: Types.CARD_LIST, data: data.data });
        }
      })
      .catch((error) => console.log(error));
  };
};

// 添加到购物车
export const addToShopCardList = (params, index) => {
  return (dispatch) => {
    request("put", `${getShoppingCard}`, params)
      .then((data) => {
        if (data.code === 200) {
          dispatch({ type: Types.CARD_LIST, data: data.data });
        }
      })
      .catch((error) => console.log(error));
  };
};