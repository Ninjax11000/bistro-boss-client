import React, { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCart from '../../Shared/FoodCart/FoodCart';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const [menu]= useMenu();
    const {type}=useParams();
    const types=['offered','pizza','salad','dessert','soup'];
    const initialIndex= types.indexOf(type);
    const dessert=menu.filter(item=>item.category==='dessert');
    const pizza=menu.filter(item=>item.category==='pizza');
    const salad=menu.filter(item=>item.category==='salad');
    const soup=menu.filter(item=>item.category==='soup');
    const offered=menu.filter(item=>item.category==='offered');
    const [tabIndex,setTabIndex]=useState(initialIndex);
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Order Food</title>  
            </Helmet>
            <Cover img={orderImg} title={"OUR SHOP"} details={"WOULD YOU LIKE TO TRY A DISH"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Offered</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Soup</Tab>
                    
                </TabList>
                <TabPanel>
                  <div className='grid md:grid-cols-3 gap-6'>
                  {offered.map(item=><FoodCart key={item._id} item={item}></FoodCart>)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid md:grid-cols-3 gap-6'>
                  {pizza.map(item=><FoodCart key={item._id} item={item}></FoodCart>)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid md:grid-cols-3 gap-6'>
                  {salad.map(item=><FoodCart key={item._id} item={item}></FoodCart>)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid md:grid-cols-3 gap-6'>
                  {dessert.map(item=><FoodCart key={item._id} item={item}></FoodCart>)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid md:grid-cols-3 gap-6'>
                  {soup.map(item=><FoodCart key={item._id} item={item}></FoodCart>)}
                  </div>
                </TabPanel>
               
                
            </Tabs>

        </div>
    );
};

export default Order;