import React from 'react'
import BasketItem from './BasketItem'

const BasketItemList = () => {
    return (
        <div>
            <BasketItem name="banana" price={3.99} count={1} />
            <BasketItem name="salmon" price={13.99} count={1} />
            <hr/>
            <p>
                <b>Total: </b> $ 17.98
            </p>
        </div>
    )
}

export default BasketItemList
