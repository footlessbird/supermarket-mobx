import React from 'react'
import './BasketItem.css'

const BasketItem = ({name, price, count}) => {
    return (
        <div className="basketItem">
            <div className="name">{name}</div>
            <div className="price">$ {price}</div>
            <div className="count">{count}</div>
            <div className="return">return item</div>
        </div>
    )
}

export default BasketItem
