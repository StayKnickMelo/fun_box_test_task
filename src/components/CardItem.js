import React from 'react'

const CardItem = ({ product }) => {
  return (
    <div className="card-container">

      <div className={`inner inner-${product.color}`}>
        <div className={product.outOfStock ? 'overlay' : ''}>
          <div className={`border-line ${product.color}`}></div>
          <div className="text">
            <span
              style={{ zIndex: 3 }} className="text-faded">Сказочное заморское яство</span>
            <h1 className="my-04 card-header">Нямушка</h1>
            <h3 className="card-h3">{`c ${product.ingridients}`}</h3>
            <span className="text-faded"> <span style={{ color: '#000' }}>{product.quantity}</span> порций</span>
            <span className="text-faded">мышь в подарок</span>
          </div>
          <div className={`label ${product.color}`}>
            <span>{product.size}</span>
            <span>КГ</span>
          </div>
        </div>
      </div>
      <span  className={product.outOfStock ? 'card-link warning' : 'card-link'} >{product.productComment} {product.link && <a href="!#">купи</a>}  </span>
    </div>

  )
};




export default CardItem
