import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card max-w-lg my-2 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-center text-xl text-primary font-bold">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>

                <div className=""> 
                    <label for="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="uppercase btn btn-primary bg-gradient-to-r from-primary-200 to-secondary-300 text-white">Appointment Now</label>
                </div>

            </div>
        </div>
    );
};

export default Service;