import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './container/home';
import list from './container/list';
import cart from './container/cart';
import buy from './container/buy';
import person from './container/person';
// import FooterBar from './components/footerBar';
//路由注册
class App extends React.Component {
    render() {
        return (
            <Router >
                <div>
                  <Route path="/" exact component={home} /> 
                   <Route path="/home" exact component={home} /> 
                    <Route path="/list"  component={list} />
                    <Route path="/cart" component={cart} />
                    <Route path="/person" component={person} />
                    <Route path="/buy" component={buy} /> 
                    
                </div>
            </Router>
           
        )
    }
}
export default App;
