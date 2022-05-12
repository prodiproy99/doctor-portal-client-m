import React from 'react';
import Footer from '../Share/Footer';
import Banner from './Banner';  
import Contact from './Contact';
import DentalCare from './DentalCare'; 
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
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