import React from 'react';

import SearchBar from '../components/home/SearchBar'
import SwiperBanner from '../components/home/SwiperBanner'
// import ListScroll from '../components/home/listScroll'
import FooterBar from '../components/footerBar';
import Grid from '../components/home/Grid';
import ListView from '../components/home/ListView';
class Home extends React.Component {
   
        pushToShopCenterDetail(smid){
            const { navigate } = this.props.navigation;
            navigate('Detail', {id: smid})
        }
    
    render() {
        return (
            <div>
            <SearchBar/>
            <SwiperBanner/>
            <Grid/>
            <ListView/>
            <FooterBar/>
            </div>
        );
    }
}

export default Home;
