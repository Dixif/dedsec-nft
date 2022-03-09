import React from 'react'
import weth from '../Assets/weth.png'
import './CollectionCard.css'
const CollectionCard = ({key,id, name ,traits, image}) => {
    return (
        <div className='collectionCard'>
            <img src={image} alt=''></img>
            <div className='details'>

                <div className='name'>
                    {name} <div className='id'> .#{id}</div>
                </div>

                <div className='priceContainer'>
                    <img src={weth} className='wethImage' alt=''></img>
                    <div className="price">{traits[0]?.value}</div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard