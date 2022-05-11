import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <button className="uppercase btn btn-primary bg-gradient-to-r from-primary-200 to-secondary-300 ">{children}</button>
    );
};

export default PrimaryBtn;