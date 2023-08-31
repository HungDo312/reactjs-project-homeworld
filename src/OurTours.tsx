import  { useState } from 'react';
import { dataOurTour } from './DataHomework/DataOurTour';

type Props = {
    id: number;
    image: string;
    price: string;
    title: string;
    description: string;
    showFullDescription: boolean;
};

const OurTours = () => {
    const initialTours: Props[] = dataOurTour.map(tour => ({ ...tour, showFullDescription: false }));
    const [tours, setTours] = useState<Props[]>(initialTours);

    const removeTour = (id: number) => {
        const updatedTours = tours.filter(tour => tour.id !== id);
        setTours(updatedTours);
    };

    const toggleDescription = (id: number) => {
        const updatedTours = tours.map(tour =>
            tour.id === id ? { ...tour, showFullDescription: !tour.showFullDescription } : tour
        );
        setTours(updatedTours);
    };

    return (
        <div className='min-h-screen py-8 mx-auto mt-20 bg-gray-100'>
            <div className='container mx-auto'>
            
                <h2 className='mb-4 text-[2.441rem] font-normal text-center'>Our Tours</h2>
                <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
                    {tours?.map((tour: Props) => (
                        <div key={tour.id} className='bg-white rounded shadow-md '>
                            <img src={tour.image} alt={tour.title} className='object-cover object-top w-full h-48 mb-4 ' />
                            <div className='p-4'>
                                <h4 className='mb-2 font-semibold text-center'>{tour.title}</h4>
                                <p className='mb-4 text-gray-600 '>
                                    {tour.showFullDescription ? tour.description : tour.description.substring(0, 200)}
                                    {!tour.showFullDescription && tour.description.length > 200 && (
                                        <span className='text-blue-500 cursor-pointer' onClick={() => toggleDescription(tour.id)}>
                                            ... Show more
                                        </span>
                                    )}
                                    {tour.showFullDescription && (
                                        <span className='text-blue-500 cursor-pointer' onClick={() => toggleDescription(tour.id)}>
                                            Show less
                                        </span>
                                    )}
                                </p>
                                <button className='flex items-center justify-center bg-transparent border-2 border-#10b981 text-#10b981 hover:bg-#10b981 hover:text-white rounded-lg w-full' onClick={() => removeTour(tour.id)}>
                                    Not Interested
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurTours;
