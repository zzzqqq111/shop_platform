const APIV1 = "http://pre-main-service.zxhj618.com";

module.exports = {
  name: "趣客",
  prefix: "antdAdmin",
  footerText:
    "© Copyright 2019-present 浙ICP备12020276号-22 浙ICP备20001805号-1",
  logo: "/public/logo.ico",
  iconFontCSS: "/public/iconfont.css",
  iconFontJS: "/public/iconfont.js",
  api: {
    getBannerList: `${APIV1}/project-store-config/getBanner`, // 获取banner
    getCategoryList: `${APIV1}/project-store-category/findAllCategory`, // 获取所有类目
    getHotProductList: `${APIV1}/project-store-config/getAllRecommendSpus`, // 获取所热销商品
    getProductListByCategory: `${APIV1}/spuWeb/categoryId`, // 获取分类下的商品
    getProductDetail: `${APIV1}/spuWeb`, // 商品详情

    getUserInfoUrl: `${APIV1}/shoppingWeb/getHeaderMessage`, // 头部信息
    getUserProject: `${APIV1}/project/getByUserId`, //获取用户所有项目
   
    getShoppingCard: `${APIV1}/shoppingCar`, //    购物车
  },
};
