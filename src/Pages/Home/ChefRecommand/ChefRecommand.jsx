import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const ChefRecommand = () => {
    const [chefR, setChefR] = useState([]);
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const recommandedItems = data.filter(item => item.category === 'offered');

                setChefR(recommandedItems);
            })
    }, [])
    return (
        <div className='my-8 '>
            <SectionTitle heading={"CHEF RECOMMENDS"} subHeading={"---Should Try---"}></SectionTitle>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    chefR?.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
                }
            </div>

        </div>
    );
};

export default ChefRecommand;