import React from 'react';
import Service from './Service';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';

const Services = () => {
    const Services = [
        {
            _id: 1,
            img: fluoride,
            name: 'Fluoride Treatment',
            description: '', 
        },

      {
            _id: 2,
            img: cavity,
            name: 'Cavity Filling',
            description: '', 
        },
    
        {
            _id: 3,
            img: whitening,
            name: 'Teeth Whitening',
            description: '', 
        }
    ]

    return (
        <div className='my-28'>
            <div className='text-center pb-5'>
                <h3 className='uppercase text-xl text-primary'>Our Services</h3>
                <h2 className='uppercase text-3xl font-bold mb-2'>Services We Provide</h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 mt-3 gap-3'>
                {
                    Services.map(service => <Service

                        key={service._id}
                        service={service}
                        
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;