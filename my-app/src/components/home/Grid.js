import { Grid } from 'antd-mobile';
import React from 'react'

class Grid1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:Array.from(new Array(9)).map((_val, i) => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `name${i}`,
      })),
            data1: Array.from(new Array(9)).map(() => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
      }))
        }
    }
      
    render(){
        return(
         
    <div>
  
    <Grid data={this.state.data} isCarousel onClick={_el => console.log(_el)} />

  </div>
        )
    }
}

  export default Grid1