import { NavBar, Icon } from 'antd-mobile';
import React from 'react'

class NavBar1 extends React.Component{
 
    render(){
        return(
            <div>
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>

  </div>
        )
    }
}

  export default NavBar1