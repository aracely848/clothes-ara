import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  
  searchRef = React.createRef();

  obtainData = (e) => {
    e.preventDefault();

    const item = this.searchRef.current.value
       
    // Lo enviamos al componente principal
    this.props.dataSearch(item)
    console.log(this.props.dataSearch(item))
  }
  
  render(){ 
  
    return (
      <React.Fragment>
        <div className="main container">
          <div className="jumbotron">
            <h1 className="display-1">Clothes Ara</h1>
            <p className="lead">In this store you can find clothes for everyone, the cost is comfortable.</p>
            <hr className="my-4" />
            <h6>Here you can find what you want.</h6>
            <form onSubmit={this.obtainData}>
              <div className="row">
                <div className="form-group col-md-8">
                  <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Add your clothes. Example: Dress" />
                </div>
                <div className="form-group col-md-4">
                 <input type="submit" className="btn btn-lg btn-success btn-block" value="Search..."/>
                </div>
              </div>
            </form>              
          </div>          
        </div>
      </React.Fragment>
    )
  }
}

export default Search;