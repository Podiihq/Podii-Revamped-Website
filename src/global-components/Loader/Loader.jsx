// Loader.js
import React from 'react';
import './loader.css';

const Loader = ({ progress }) => {
    return (
        <div className="loader gap-10">
            <div className='flex gap-4 items-center'>
                <p className='text-2xl lg:text-3xl wowi'>Podii Consultants</p>
            </div>
            <p className='text-2xl leading-none mb-2'> {progress}%</p>
        </div>
    );
};

export default Loader;