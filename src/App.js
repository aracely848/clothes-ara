import React, {Component} from 'react';
import Search from './components/search/Search';
import Result from './components/result/Result';
import api from './components/products.json';

class App extends Component {

  state = {
    item: "",
    products: []
  };  

  searchApi = () => {
    let products = [...this.state.products ];
    products = api;
    this.setState([ products ])
  }

  dataSearch = (item) => {
    this.setState({
      item: item
    }, () => {
      this.searchApi()
    })
  }

  render(){  
    
    return (
      <div className="App">
        <Search dataSearch = {this.dataSearch} />
        <Result products={this.state.products}/>
      </div>
    );
  }
 
}

export default App;
