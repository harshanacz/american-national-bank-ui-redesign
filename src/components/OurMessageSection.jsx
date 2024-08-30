import React from 'react';

const OurMessageSection = () => {
  return (
    <div className='w-full px-8 sm:px-8 lg:px-16 mb-16 mt-4 mx-4  '>
      <div className='bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg px-16 py-8'>
        <h1 className='text-center text-2xl sm:text-2xl lg:text-2xl font-bold tracking-wide'>American National Bank’s Statement on Soundness and Stability</h1>
        <h2 className='text-center text-1xl sm:text-1xl lg:text-1xl font-light tracking-wide mt-4'>Although recent events surrounding Silicon Valley Bank and Signature bank may have caused concerns regarding the safety of your funds, we’re confident in our ability to meet your needs today and well into the future. As a privately held institution with a history as a trusted and reliable partner for more than 165 years, ANB has a long and demonstrated track record of being a stable, safe, preferred place to bank.</h2>
        <div className="flex justify-center"> <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md text-white mt-4"
        >
          Read More
        </a>
        </div>
      </div>
    </div>
  )
}

export default OurMessageSection
