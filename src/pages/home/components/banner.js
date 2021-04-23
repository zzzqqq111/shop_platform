import React, { useEffect } from "react";
import "../index.less";
import AwesomeSwiper from "react-awesome-swiper";
import { getBannerData } from "@redux/actions/actionCreator";
import { useSelector, useDispatch } from "react-redux";
const SlideShow = React.memo(() => {
  const config = {
    loop: true, //循环切换
    autoplay: {
      delay: 3000, //自动播放时间
      stopOnLastSlide: false, //最后一张幻灯片停止自动播放
      disableOnInteraction: true, //禁用在交互
    },
    preloadImages: false, //提前预加载图片
    lazy: true, //图片懒加载
    speed: 500, //图片切换速度
    navigation: {
      //显示左右滑动箭头
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      //显示分页指示点
      el: ".swiper-pagination",
      bulletElement: "li",
      hideOnClick: false, //隐藏点击
      clickable: true, //可以点击的
    },
    on: {
      slideChange: function () {
        //图片索引变化回调函数
        console.log(this.activeIndex);
      },
    },
  };
  const bannerList = useSelector((state) => state.shop.bannerList);
  const dispatch = useDispatch();
  // 绑定点击事件
  const SlideBtn = (slide) => {
    console.log(slide);
  };
  useEffect(() => {
    dispatch(getBannerData());
  }, []);

  return (
    <AwesomeSwiper config={config} className="slideshow">
      <div className="swiper-wrapper">
        {bannerList.map((item, index) => (
          <div className="swiper-slide" onClick={() => SlideBtn("slider1")} key={item.id}>
            <img src={item.mainPic} />
          </div>
        ))}
      </div>
      {/* 显示左边分页箭头 */}
      <div className="swiper-button-prev"></div>
      {/* 显示右边分页箭头 */}
      <div className="swiper-button-next"></div>
      {/* 显示指示点 */}
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  );
});

export default SlideShow;
