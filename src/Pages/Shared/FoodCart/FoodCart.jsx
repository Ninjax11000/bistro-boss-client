import React from 'react';

const FoodCart = ({item}) => {
    const {name,image,recipe,price}=item
    return (
        <div className="card w-96 bg-base-100 shadow-xl relative">
            <figure><img src={image} alt="Shoes" /></figure>
                <p className='bg-slate-900 text-white absolute top-3 right-3'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions mx-auto">
                    <button className="btn btn-outline border-0 bg-slate-100 border-b-4 border-orange-400 ">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;