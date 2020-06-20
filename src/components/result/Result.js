import React, { Component } from 'react';
import List from '../list/List';

class Result extends Component {
  
  render(){

    const products = this.props.products;

    //if(products.length === 0) return null;

    //console.log(products);
  
    return (    
      <div className="col-12 p-5 row">
        { products.map( product => (
          <List 
            key={product.id}
            type={product.type}
            name={product.name}
            image={product.image}
            description={product.description}
            cost={product.cost} 
            sizes={product.sizes}
          />
        ))}
      </div>
    )
  }
}

// class Result extends Component {
//   render(){
//     const products = this.props.products;
//     return (
//       <React.Fragment>
//         <div className="col-12 p-5 row">
//           {products.map(product => (
//             <List 
//               key={product.id}
//               type={product.type}
//               name={product.name}
//               image={product.image}
//               description={product.description}
//               cost={product.cost} 
//               sizes={product.sizes}
//             />
//           ))}
//           </div>
//       </React.Fragment>
//     );
//   }
// }

export default Result;