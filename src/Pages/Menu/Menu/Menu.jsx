import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const menuDetails='Would you like to try a dish';
const dessertDetails='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
const Menu = () => {
    const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category==='dessert');
    const pizza=menu.filter(item=>item.category==='pizza');
    const salad=menu.filter(item=>item.category==='salad');
    const soup=menu.filter(item=>item.category==='soup');
    const offered=menu.filter(item=>item.category==='offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
               
            </Helmet>
            <Cover img={menuImg} details={menuDetails} title={"OUR MENU"}></Cover>
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitle>
            <MenuCategory items={offered} type={'offered'}></MenuCategory>
            <Cover img={dessertImg} details={dessertDetails} title={"Desserts"}></Cover>
            <MenuCategory items={dessert} type={'dessert'}></MenuCategory>

            <Cover img={pizzaImg} details={dessertDetails} title={"pizza"}></Cover>
            <MenuCategory items={pizza} type={'pizza'}></MenuCategory>

            <Cover img={saladImg} details={dessertDetails} title={"salad"}></Cover>
            <MenuCategory items={salad} type={'salad'}></MenuCategory>

            <Cover img={soupImg} details={dessertDetails} title={"soup"}></Cover>
            <MenuCategory items={soup} type={'soup'}></MenuCategory>

        </div>
    );
};

export default Menu;