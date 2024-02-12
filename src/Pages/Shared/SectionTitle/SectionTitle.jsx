import React from 'react';


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center space-y-2 my-12'>
            <p className='text-warning text-xl'>{subHeading}</p>
            <h3 className='text-5xl border-y-4 w-1/2 mx-auto py-6'>{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;