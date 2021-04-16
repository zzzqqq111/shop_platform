import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import '../index.less'

const hotIndex1 = [
  {
    index: 100,
    spuImg: require('@common/images/icon/hot1.png'),
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 89,
    spuImg: require('@common/images/icon/hot1.png'),
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 90,
    spuImg: require('@common/images/icon/hot1.png'),
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  }
];
const hotIndex2 = [
  {
    index: 9,
    spuImg: require('@common/images/icon/hot1.png'),
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 7,
    spuImg: require('@common/images/icon/hot1.png'),
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 5,
    spuImg: require('@common/images/icon/hot1.png'),
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 100,
    spuImg: require('@common/images/icon/hot1.png'),
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 89,
    spuImg: require('@common/images/icon/hot1.png'),
    spuTitle: '多功能家用工具箱套装 冲击钻 12V双速双锂电',
    unit: '箱',
    price: 147
  },
  {
    index: 90,
    spuImg: require('@common/images/icon/hot1.png'),
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
        <img alt="" style={{ width: 5, height: 6 }} src='/assets/images/shop/toRight.png' />
      </div>
    </div>
    <div className='topOne'>
      <div className='oneBox'>
        {
          hotIndex1.map(hot => {
            return (<div className='oneBox_item'>
              <img alt="" style={{ width: 142, height: 40, position: 'absolute', top: 8, left: -12 }} />
              <img alt="" className='spuImg' src={hot.spuImg} />
              <div className='spuTitle' style={{ width: 144, height: 44, overflow: 'hidden', fontFamily: 'PingFangSC-Medium, sans-serif;' }}>{hot.spuTitle} </div>
              <div className='spuPrice' style={{ marginBottom: 2, }}>¥{hot.price}/{hot.unit}</div>
            </div>)
          })
        }
      </div>
      <div className='twoBox'>
        {
          hotIndex2.map(hot => {
            return (<div className='two_item'>
              <div style={{ position: 'absolute', top: 8, left: -12 }}>
                <img alt="" style={{ width: 46, height: 40 }} ></img>
                <div style={{ fontSize: 24, position: 'absolute', left: 16, top: -3 }}>1</div>
              </div>
              <img alt="" style={{ width: 72, height: 72, marginBottom: 1.5 }} src={hot.spuImg} />
              <div className='spuTitle' style={{ width: 148, height: 22, overflow: 'hidden', marginBottom: 1, }}>{hot.spuTitle}</div>
              <div className='spuPrice' style={{ marginBottom: 1 }}>￥{hot.price}/{hot.unit}</div>
            </div>)
          })
        }
      </div>
    </div>
  </div >)
}

