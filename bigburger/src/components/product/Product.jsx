import './product.css';
import data from '../../data/data';
import React, { useState } from 'react';

function Product({ isAdmin, handleAddToBasket }) {
  const [erasingStates, setErasingStates] = useState(data.map(() => false));
  
  const toggleErasing = (index) => {
    const newErasingStates = [...erasingStates];
    newErasingStates[index] = !erasingStates[index];
    setErasingStates(newErasingStates);
  };

  return (
    <div className="product">
      <div className="product__cards">
        {data.map((item, index) => (
          <article className={erasingStates[index] ? 'product__cards__card erase' : 'product__cards__card'} key={index}>
            <div className='product__content'>
              <div className='product__content__image'>
                <img src={item.image} alt="burger" />
              </div>
              <div className='product__content__title'>{item.title}</div>
              <div className='product__content__details'>
                <div className="price">{item.price.toFixed(2)}€ </div>
                <div className="btn" onClick={() => handleAddToBasket(item)}>Ajouter</div>
              </div>
              <div className={isAdmin ? 'close' : 'close hidden'} onClick={() => toggleErasing(index)}>
                <i className="fa-solid fa-circle-xmark fa-xl"></i>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Product;
