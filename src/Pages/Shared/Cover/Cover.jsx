import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title, details }) => {

    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[700px] " >
               
                <div className="hero-content text-center text-neutral-content bg-slate-600 bg-opacity-25 px-12 py-12">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{details}</p>

                    </div>
                </div>
            </div>
        </Parallax>
            );
       
};

export default Cover;