import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import Call from '../Call/Call';
import About from '../About/About';
import ChefRecommand from '../ChefRecommand/ChefRecommand';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <Featured></Featured>
            <ChefRecommand></ChefRecommand>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;