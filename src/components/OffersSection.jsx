import React from 'react';
import { motion } from 'framer-motion'; 
import { offers } from "../constants";

const OffersSection = () => {
    return (
        <div className="relative mt-20 mb-8 lg:min-h-[500px]">
            <div className="text-center">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
                    Current Offers
                </h2>
            </div>
            <div className="mt-20 flex flex-wrap lg:flex-nowrap justify-center">
                {offers.map((offer, index) => (
                    <motion.div
                        key={index}
                        className="w-full sm:w-1/2 lg:w-1/3 mb-4 px-2 lg:px-4"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: "easeOut" }} 
                        viewport={{ once: true }} 
                    >
                        <div className='w-full p-6 bg-white border border-blue-100 rounded-lg shadow text-center'>
                            <div className='flex items-center justify-between'>
                                {!offer.newLabel && (
                                    <span className='text-sm font-light text-blue-500'>
                                        Limited time offer
                                    </span>
                                )}
                                {offer.newLabel && (
                                    <span className='px-2 py-1 text-sm text-white bg-green-500 rounded'>
                                        New
                                    </span>
                                )}
                            </div>
                            <div className='mt-2'>
                                <p className='text-2xl font-bold text-gray-700'>
                                    {offer.title}
                                </p>
                                <p className='mt-2 text-sm text-gray-500'>
                                    {offer.description}
                                </p>
                            </div>
                            <a
                                href="#"
                                className="bg-blue-800 mt-5 hover:bg-blue-700 text-white text-sm lg:text-base font-semibold py-2 px-6 rounded-md inline-flex items-center space-x-2"
                            >
                                <span>{offer.buttonText}</span>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default OffersSection;
