import React from 'react';

import CardItem from './CardItem';

const CardsList = () => {
  const products = [
    {
      id: 1,
      productName: 'Нямушка',
      ingridients: 'фуа-гра',
      productComment: 'Чего сидишь? Порадуй котэ,',
      quantity: '10',
      color: 'blue',
      size: '0,5',
      outOfStock: false,
      link: true
    },
    {
      id: 1,
      productName: 'Нямушка',
      ingridients: 'рыбой',
      productComment: 'Головы щучьи с чесноком да свежайшая семгушка',
      quantity: '40',
      color: 'red',
      size: '2',
      outOfStock: false
    },
    {
      id: 1,
      productName: 'Нямушка',
      ingridients: 'курицой',
      productComment: 'Печалька, c курой закончился',
      quantity: '100',
      color: 'grey',
      size: 5,
      outOfStock: true
    },

  ]
  return (
    <div className='grid-container'>
      {products.length > 0 && products.map(product => (
        <CardItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default CardsList
