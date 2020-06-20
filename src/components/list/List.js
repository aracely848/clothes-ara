import React  from 'react'; 
import './list.css'
import PropTypes from 'prop-types';

const List = (props) => {

  const { type, name, image, description, cost, sizes } = props.product;

  return (
    <div>
      <h1 className="text-center mb-4 ml-5 mr-5">{type}</h1>    
      <div className="list">
        <h6>{name} </h6>
        <img src={image} alt={description}/>
        <p>{description}</p>
        <p>{cost}</p>
        <p>{sizes}</p>
      </div>
    </div>
  );
}; 

List.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  cost: PropTypes.string,
  sizes: PropTypes.string
}; 

export default List;


