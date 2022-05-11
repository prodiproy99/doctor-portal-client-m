import React from 'react';
import PrimaryBtn from '../Share/PrimaryBtn/PrimaryBtn';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            backgroundImage: `url(${appointment})`
        }} className='flex justify-center items-center my-28'>

            <div className="flex-1 hidden lg:block">
                <img className='mt-[-100px]' src={doctor} alt='' />
            </div>
            <div className='flex-1 p-8'>
                <h3 className='text-xl text-primary font-bold mb-2'>Appointment</h3>
                <h2 className='text-3xl text-white mb-2'>Make an Appointment Today</h2>
                <p className='text-white mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>

                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>

        </section>

    );
};

export default MakeAppointment;