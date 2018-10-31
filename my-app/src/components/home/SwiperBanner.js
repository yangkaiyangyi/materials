import React from 'react';

import './Swiper.css'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

import b1 from '../../staic/img/banner1.jpg'
import b2 from '../../staic/img/banner2.jpg'  //通过这样引入本地图片，才显示
class SwiperBanner extends React.Component {

  constructor(props){
    super(props)
    this.state={
      imglist:[
        b1,
        b2
      ]
    }
  }
  
  //在组件挂载完毕的时候生成Swiper对象
  componentDidMount() {
   new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      }
    });
  }
  render() {
    return (
      <div className="App">
        <div className="swiper-container">
          <div className="swiper-wrapper">
          
            {
              (function(imglist){

                var arr = imglist.map(
                  (item,index) =>{
                    return   (<div key={index} className="swiper-slide">
                   
                    
                     <img src={item} alt=""/>
                    </div>)
                })
                return arr
              })(this.state.imglist)
            }
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </div>
    );
  }
}


    


export default SwiperBanner;