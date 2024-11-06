// ParentComponent.js
import React, { useState,useEffect } from 'react';
import SelectVidhanlocality from '../SelectVidhanlocality';
import { useNavigate,useLocation } from 'react-router-dom';
import { axiosInstance } from '../../Services';

const PoliticalDominance = () => {
  const [selectedVidhan, setSelectedVidhan] = useState('');
  const [selectedLocality, setSelectedLocality] = useState('');
  const navigate=useNavigate();


  useEffect(async ()=>{
      await  axiosInstance.get('')
  })

  const handleVidhanChange = (vidhan) => {
    setSelectedVidhan(vidhan);
  };

  const handleLocalityChange = (locality) => {
    setSelectedLocality(locality);
  };

  return (
    <>
   
    <div className="max-w-2xl  border-solid border-2  p-4 border-green-950  rounded-[12px] md:mx-auto mt-10">
      <SelectVidhanlocality
        onVidhanChange={handleVidhanChange} 
        onLocalityChange={handleLocalityChange} 
      />
        <h2 className='m-4  font-bold text-green-950'>
          Which community or social groups dominates the political equations in the area?
        (ଏହିଅଞ୍ଚ଱ଯ ଯାଜକନୈତିକ ସଭୀକଯଣକଯ କକଉଁସମ୍ପ୍ରଦାୟ ଫା ସାଭାଜିକ କଗାଷ୍ଠୀଯ ଆଧି଩ତୟ ଯହିଛି?)
        </h2>
         
         <div className="">
        <h2 className=" mx-4 text-green-800  font-semibold  ">
        {selectedVidhan ==''? "No result" :  "The village is dominant by chasa ,keuta, and pana caste and they are political dominant by chasa caste."}
       </h2>
        </div>
        
      <button   onClick={()=>{navigate('/User/pages')}} className='  mx-auto flex justify-between  text-white px-4 rounded-md bg-black'>Back</button>
    </div>

    </>
  );
};

export default PoliticalDominance;
