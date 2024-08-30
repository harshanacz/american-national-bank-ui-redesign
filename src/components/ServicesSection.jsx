import React from 'react'
import { services } from "../constants";

const ServicesSection = () => {
    return (
        <div className='min-h-64 w-full bg-gradient-to-r from-blue-700 to-blue-900 py-12 px-8'>

            <div className='text-center'>
                <h2 className='text-4xl sm:text-5xl lg:text-5xl pt-10 pb-2 tracking-wide text-white'>
                    Quick Access
                </h2>
                <h2 className='text-base pb-10 sm:text-base lg:text-base tracking-wide  text-gray-200 font-light'>
                Fast, easy access to your banking needs
                </h2>
            </div>
            <div className='flex flex-wrap justify-center items-center'>

                {services.map((service, index) => (
                    <div key={index} className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4  px-5 flex flex-col items-center hover:border hover:border-white hover:rounded-[10px] py-5 hover:cursor-pointer'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className="flex items-center justify-center h-12 w-12 text-white">
                                {React.cloneElement(service.icon, { size: 35 })} {}
                            </div>

                            <h2 className='text-1xl sm:text-2xl lg:text-base mt-0 tracking-wide text-white text-center'>
                                {service.title}
                            </h2>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ServicesSection
