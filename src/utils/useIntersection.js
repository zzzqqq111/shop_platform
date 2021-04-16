import React, { useState, useEffect } from 'react';

export default function useIntersection(dom, deps, preview) {
  const [show, setShow] = useState(preview);
  useEffect(() => {
    var io = new IntersectionObserver((entries) => {
      entries.forEach(item => {
        // 元素可见时
        if (item.isIntersecting) {
          setShow(true)
          // 图片加载后即停止监听该元素
          // io.unobserve(item.target)
        } else {
          setShow(false);
        }
      });
    });
    if (dom) { io.observe(dom) };

  }, deps);

  console.log(dom, show, deps, 'show,deps')
  return ({
    show
  })
}