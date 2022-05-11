import React from 'react';

const InfoCard = ({img, cardTitle, para, bgClass}) => {
    return (
        <div>
            <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
                <figure class = 'pl-2'>

                    <img src={img} alt="Album" />

                </figure>
                <div className="card-body text-white pl-3">
                    <h2 className="card-title"> {cardTitle}</h2>
                    <p className='text-sm'> {para}</p> 
                </div>
            </div>
        </div>
    );
};

export default InfoCard;