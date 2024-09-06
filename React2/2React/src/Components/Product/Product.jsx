import React from 'react'

const Product = (props) => {
  return (
    <div className='card'>

      <img src={props.p.image} className='w-100' alt=""/>
      <div className="card-body">
      <p className='fs-1'>Product.id-{props.p.id}</p>
     <p className='fs-2'>product id -{props.p.title}</p>
     <p className='fs-3'>product id -{props.p.price}</p>
     </div>
    </div>
  )
}

export default Product;
