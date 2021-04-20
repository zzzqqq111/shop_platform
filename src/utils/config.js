const APIV1 = 'http://pre-main-service.zxhj618.com'

module.exports = {
    name: '趣客',
    prefix: 'antdAdmin',
    footerText:
        '© Copyright 2019-present 浙ICP备12020276号-22 浙ICP备20001805号-1',
    logo: '/public/logo.ico',
    iconFontCSS: '/public/iconfont.css',
    iconFontJS: '/public/iconfont.js',
    api: {
       getBannerList: `${APIV1}/project-store-config/getBanner` // 获取banner
    }
}
