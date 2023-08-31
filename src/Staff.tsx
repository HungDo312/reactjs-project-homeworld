import React, { useState } from 'react';
import { dataStaff } from './DataHomework/DataStaff';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

type StaffData = {
    id: number;
    image: string;
    author: string;
    job: string;
    infor: string;
};

const Staff = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const staff: StaffData = dataStaff[currentIndex];

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % dataStaff.length
        setCurrentIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : dataStaff.length - 1;
        setCurrentIndex(prevIndex);
    };

    const handleRandom = () => {
        const randomIndex = Math.floor(Math.random() * dataStaff.length);
        setCurrentIndex(randomIndex);
    };

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='p-6 text-center transition-all duration-300 bg-white rounded-md shadow-md max-w-[600px]'>
                <div className='w-32 h-32 mx-auto overflow-hidden rounded-full'>
                    <img src={staff.image} alt={staff.author} className='object-cover w-full h-full' />
                </div>
                <h1 className='mt-4 text-lg font-semibold'>{staff.author}</h1>
                <h3 className='text-gray-600'>{staff.job}</h3>
                <div className='mb-4 text-gray-600'>{staff.infor}</div>
                <div className='flex items-center justify-around mt-4'>
                    <button className='text-gray-600' onClick={handlePrev}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button className='text-gray-600' onClick={handleNext}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <div>
                    <button className='mt-4 text-blue-500 hover:underline' onClick={handleRandom}>
                        surprise me
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Staff;
