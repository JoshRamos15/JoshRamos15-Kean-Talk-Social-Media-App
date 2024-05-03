import React from 'react';
import './Container.css'; // Import the specific styles for this container

const Container = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Container;