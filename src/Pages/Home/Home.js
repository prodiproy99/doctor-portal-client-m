import React from 'react';
import Banner from './Banner';  
import Contact from './Contact';
import DentalCare from './DentalCare';
import Footer from './Footer';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
           <Banner />
           <Info></Info> 
           <Services></Services>
           <DentalCare></DentalCare>
           <MakeAppointment />
           <Testimonials />
           <Contact />
           <Footer></Footer>
        </div>
    );
};

export default Home;