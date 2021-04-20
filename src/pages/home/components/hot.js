import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import '../index.less'
import hot1 from '@images/icon/image_szjg.png'
import hot2 from '@images/icon/hot1.png'
import hot6 from '@images/icon/hot6.png'
import circle from '@images/icon/circle.png'

const hotIndex1 = [
  {
    index: 100,
    spuImg: hot1,
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 89,
    spuImg: hot1,
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 90,
    spuImg: hot1,
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  }
];
const hotIndex2 = [
  {
    index: 9,
    spuImg: hot1,
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 7,
    spuImg: hot1,
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 5,
    spuImg: hot1,
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 100,
    spuImg: hot1,
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 89,
    spuImg: hot1,
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 90,
    spuImg: hot1,
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  }
];


export default function HotSale() {
  return (<div className='contentBox'>
    <div className={classNames('header','title_margin')}>
      <div className='title'>热销榜单</div>
      <div className='more'>
        查看更多
        <img alt="" src={circle} />
      </div>
    </div>
    <div className='topOne'>
      <div className={classNames('oneBox','commbox')}>
        {
          hotIndex1.map(hot => {
            return (<div className={classNames('oneBox_item','commonItem')}>
              <img alt="" className='levelImg' src={hot2}/>
              <img alt="" className='spuImg' src={hot.spuImg} />
              <div className='spuTitle'>{hot.spuTitle} </div>
              <div className='spuPrice'>¥{hot.price}/{hot.unit}</div>
            </div>)
          })
        }
      </div>
      <div className={classNames('twoBox','commbox')}>
        {
          hotIndex2.map((hot,index) => {
            return (<div className={classNames('two_item','commonItem')}>
              <img alt="" src={hot6} className='levelImg'></img>
              <img alt="" src={hot.spuImg} className='spuImg'/>
              <div className='spuTitle'>{hot.spuTitle}</div>
              <div className='spuPrice'>￥{hot.price}/{hot.unit}</div>
            </div>)
          })
        }
      </div>
    </div>
  </div >)
}

