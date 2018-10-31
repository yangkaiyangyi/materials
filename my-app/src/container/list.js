import React from 'react';
import Carousel from '../components/list/carousel'
import FooterBar from '../components/footerBar';
import NavBar from '../components/header.js/NavBar'
class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Carousel/>
                <div>This is List!</div>
                <FooterBar/>
            </div>
        );
    }
}

export default Home;
