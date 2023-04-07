import React from 'react';
import ProtoTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  console.log(image, name, price);
  return <article className='product'>
    <img src={image.url} alt={name} />
    <h4>{name}</h4>
    <p>${price}</p>
  </article>;
};

Product.ProtoTypes = {
  image: ProtoTypes.object.isRequired,
  name: ProtoTypes.string.isRequired,
  price: ProtoTypes.number.isRequired,
};

Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: defaultImage
}

export default Product;
