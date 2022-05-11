import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            <InfoCard bgClass='bg-gradient-to-r from-primary to-secondary' cardTitle='Openening Hourse' para='Lorem Ipsum is simply' img={clock}></InfoCard>

            <InfoCard bgClass='bg-[#3d4451]' cardTitle='Visit our location' para='Brooklyn, NY 10036, United States' img={marker}></InfoCard>

            <InfoCard bgClass='bg-gradient-to-r from-primary to-secondary' cardTitle='Constact us now' para='+000 123 456789' img={phone}></InfoCard>
        </div>
    );
};

export default Info;