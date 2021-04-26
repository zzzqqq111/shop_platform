import { api, request } from "@utils";
const { getAddressList, getDefaultAddressList, setDefaultAddress } = api;
const Types = require("../actionTypes");
export const getAddressData = () => {
  return (dispatch) => {
    request("get", getAddressList)
      .then((data) => {
        dispatch({ type: Types.ADDRESS_LIST, data: data.data });
      })
      .catch((error) => console.log(error));
  };
};
// 增加收货地址
export const addNewAddress = (params, callback=()=>{}) => {
  return (dispatch) => {
    request("put", getAddressList, params)
      .then((data) => {
        if (data.code === 200) {
          dispatch(getAddressData());
          callback()
        }
      })
      .catch((error) => console.log(error));
  };
};

//  获取地址详情
export const queryAddresssDetail = (params) => {
  return (dispatch) => {
    request("get", `${getAddressList}/${params.id}`)
      .then((data) => {
        dispatch({ type: Types.ADDRESS_DETAIL, data: data.data });
      })
      .catch((error) => console.log(error));
  };
};

//   修改收货地址
export const updateAddressInfo = (params, callback=()=>{}) => {
  return (dispatch) => {
    request("patch", `${getAddressList}/${params.id}`, params)
      .then((data) => {
        if (data.code === 200) {
          dispatch(getAddressData());
          callback()
        }
      })
      .catch((error) => console.log(error));
  };
};

// 删除收货地址
export const deleteAddress = params => {
  return (dispatch) => {
    request("delete", `${getAddressList}/${params.id}`)
      .then((data) => {
        if (data.code === 200) {
          dispatch(getAddressData());
        }
      })
      .catch((error) => console.log(error));
  };
};
// 设置默认地址
export const setDefaultOrderAddress = params => {
  return (dispatch) => {
    request("patch", `${setDefaultAddress}/${params.id}`)
      .then((data) => {
        if (data.code === 200) {
          dispatch(getAddressData());
        }
      })
      .catch((error) => console.log(error));
  };
};

// 修改item
export const updateItem = params => {
  return (dispatch) => {
    dispatch({ type: Types.ADDRESS_DETAIL, data: params.item });
  };
};
