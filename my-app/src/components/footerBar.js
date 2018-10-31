import React from 'react';
import {withRouter} from "react-router-dom";
import './footerBar.css';

class Footbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            navs: [{
                    pageUrl:'home',
                    title: "首页",
                    isActive: true
            }, {    
                    pageUrl:'list',
                    title: "分类",
                    isActive: false
            }, {    
                    pageUrl:'buy',
                    title: "买买买",
                    isActive: false
            }, {    
                    pageUrl:'cart',
                    title: "购物车",
                    isActive: false
            },{
                    pageUrl:'person',
                    title: "我的",
                    isActive: false
            }]
       }
    }
    componentDidMount() {
        //拿到当前页面的pageUrl，循环state中的pageInfo，把当前页的isActive设置为true
        console.log(window.location.pathname);
        
        let currentPage =window.location.pathname.replace("/","");
        let data=this.state.navs;
        data.forEach((item,index)=>{
              item.isActive=false;
              if(item.pageUrl===currentPage){
                  data[index].isActive=true;
                  this.setState({
                      navs: data
                    });
              }
        })
    
    }
    isActive(index,event){
        //跳转路由
        let page=event.currentTarget.getAttribute("data-to");
        console.log(page);
        
        this.props.history.push("/"+page);

        //点击字体颜色变化
        var navs = this.state.navs;
        for(var i=0;i<navs.length;i++){
            navs[i].isActive=false;
        }
        navs[index].isActive = true;

        this.setState({
            navs
        })
    }
   
    render() {
        return (
            <div>
                <div className='navbox'> 
                 <ul className='navBar'>
                 {
                    (function(navs){
                        
                       var arr = navs.map(
                           (item,index) => {
                            console.log(item,index);
                            return (<li key={index} onClick={this.isActive.bind(this,index)} data-to={item.pageUrl} className={item.isActive?'isActive':''}>
                                <span>
                                    {item.title}
                                </span>
                            </li>)
                           }
                       ) 
                      return arr  

                    }.bind(this))(this.state.navs)

                 }
               
                 </ul>
                
                </div>
            </div>
        );
    }


}

export default withRouter(Footbar);