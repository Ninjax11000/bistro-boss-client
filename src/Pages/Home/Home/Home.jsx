import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import Call from '../Call/Call';
import About from '../About/About';
import ChefRecommand from '../ChefRecommand/ChefRecommand';

const Home = () => {
    return (
        <div>
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