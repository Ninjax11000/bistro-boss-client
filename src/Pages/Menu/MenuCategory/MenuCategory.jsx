import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, type }) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-10 my-10'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center my-8'>
                {type && <Link to={`/order/${type}`}>  <button className="btn btn-outline border-0 border-b-4">ORDER NOW</button></Link>}
            </div>
        </div>
    );
};

export default MenuCategory;