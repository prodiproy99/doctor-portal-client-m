import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryBtn from '../Share/PrimaryBtn/PrimaryBtn';

const DentalCare = () => {
    return (
        <div className="hero my-28 min-h-screen bg-white block justify-center items-center lg:flex">
            <div className="flex-1 p-5">
                <img className='rounded-md' src={treatment} alt='' />
            </div>
            <div className='flex-1 p-8'>
                <h1 className="text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </div>
    );
};

export default DentalCare;