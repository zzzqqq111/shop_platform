import React from "react";
import "../index.less";
import AwesomeSwiper from "react-awesome-swiper";
import image_jzcl from '@images/icon/image_jzcl.png'

export default class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
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
      },
      activeIndex: 0, //当前图片索引
    };
  }
  render() {
    return (
      <AwesomeSwiper config={this.state.config} className="slideshow">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide"
            onClick={() => this.SlideBtn("slider1")}
          >
            <img src={image_jzcl} />
          </div>
          <div
            className="swiper-slide"
            onClick={() => this.SlideBtn("slider2")}
          >
            <img src={image_jzcl} />
          </div>
          <div
            className="swiper-slide"
            onClick={() => this.SlideBtn("slider3")}
          >
            <img src={image_jzcl} />
          </div>
        </div>
        {/* 显示左边分页箭头 */}
        <div className="swiper-button-prev"></div>
        {/* 显示右边分页箭头 */}
        <div className="swiper-button-next"></div>
        {/* 显示指示点 */}
        <div className="swiper-pagination"></div>
      </AwesomeSwiper>
    );
  }
  // 绑定点击事件
  SlideBtn = (slide) => {
    console.log(slide);
  };
}
