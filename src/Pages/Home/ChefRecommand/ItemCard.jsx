import React from 'react';

const ItemCard = ({ item }) => {
    const {image,name, recipe}=item;
    return (
        <div className=" w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title mx-auto">{name}</h2>
                <p>{recipe}</p>
                <div className="mx-auto">
                    <button className="btn btn-warning ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;