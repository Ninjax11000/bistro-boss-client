import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { data } from 'autoprefixer';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems=data.filter(item=>item.category==='popular');
            console.log(popularItems);
            setMenu(popularItems);
        })
    },[])
    return (
        <section className='mb-12'>
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
           <div className='text-center my-8'>
           <button className="btn btn-outline border-0 border-b-4">VIEW FULL MENU</button>
           </div>
        </section>
    );
};

export default PopularMenu;