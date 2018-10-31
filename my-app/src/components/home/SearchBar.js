import { SearchBar, WhiteSpace} from 'antd-mobile';
import React from 'react';
import './SearchBar.css'

class SearchBarExample extends React.Component {
  state = {
    value: '美食',
  };

  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (<div>
      <div className="sub-title"></div>
      <SearchBar placeholder="原装进口奶粉特惠" maxLength={8} />
      <WhiteSpace />
    </div>);
  }
}

export default SearchBarExample;
