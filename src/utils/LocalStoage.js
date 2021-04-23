const LocalStoage = {};

// const KEYS = "zxhj_userInfo";

LocalStoage.getItem = function (KEYS) {
  let data = window.localStorage.getItem(KEYS);
  return JSON.parse(data);
};

LocalStoage.setItem = function (KEY, data) {
  window.localStorage.setItem(KEY, JSON.stringify(data));
};

export default LocalStoage;
