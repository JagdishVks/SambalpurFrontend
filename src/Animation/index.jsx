import React from 'react';
import { FaComments, FaChartLine, FaUserFriends, FaGlobe } from 'react-icons/fa'; // Importing relevant icons

const Animation = () => {
  return (
    <>
    
    <h1 className='font-mono text-[40%]'>Loading</h1>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="text-6xl text-blue-600 space-x-8 flex">
        
        {/* Message icon: represents communication */}
        <div className="animate-bounce duration-[2000ms]">
          <FaComments className="transform transition duration-[1000ms] ease-in-out" />
        </div>


        {/* User group icon: represents outreach */}
        <div className="animate-pulse duration-[2000ms] delay-3000">
          <FaUserFriends className="transform scale-125 transition duration-[1000ms] ease-in-out" />
        </div>

        {/* Globe icon: represents global reach */}
        <div className="animate-bounce duration-[2000ms] delay-5000">
          <FaGlobe className="transform transition duration-[2000ms] ease-in-out scale-105" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Animation;
