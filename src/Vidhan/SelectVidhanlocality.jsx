import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../Services';

const SelectVidhanlocality = ({ onVidhanChange, onLocalityChange }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedVidhan, setSelectedVidhan] = useState('');
  const [locality, setlocality] = useState('');
  const [allDetails, setAllDetails] = useState([]);




  useEffect(() => {
    axiosInstance.get('/StatusGetAllLocs')
      .then((res) => {
        setAllDetails(res.data);
        console.log('Fetched All Details:', res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  

  

  const handleVidhanChange = (event) => {
  
    setSelectedVidhan(event.target.value);
    
    onVidhanChange(event.target.value);
    // setValue('vidhan', vidhanId);
    setValue('locality', '');
  };

  const handleLocalityChange = (event) => {
    const locality = event.target.value;
    setlocality(locality)
    onLocalityChange(event.target.value);
    console.log(event.target.value)
    setValue('locality', locality);
  };

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  // Function to remove duplicates based on aC_Name
  const uniqueVidhanDetails = allDetails.reduce((acc, current) => {
    const isDuplicate = acc.find(item => item.aC_Name === current.aC_Name);
    if (!isDuplicate) {
      acc.push(current);
    }
    return acc;
  }, []);


  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="vidhan" className="block text-gray-700">Vidhan Sabha</label>
          <select
            id="vidhan"
            name="vidhan"
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md"
            {...register('vidhan', { required: true })}
            onChange={handleVidhanChange}
          >
            <option value="">Select Vidhan Sabha</option>
            {uniqueVidhanDetails
                 .sort((a, b) => a.aC_Name.localeCompare(b.aC_Name))
                 .map((vidhan) => (
                 <option key={vidhan.id} value={vidhan.id}>
                 {vidhan.aC_Name}
                </option>
  ))}
          </select>
        </div>

        <div>
          <label htmlFor="locality" className="block text-gray-700">Locality</label>
          <select
            id="locality"
            name="locality"
            className="mt-1 block w-full bg-gray-100 border text-md border-gray-300 rounded-md"
            {...register('locality', { required: true })}
            onChange={handleLocalityChange}
            disabled={!selectedVidhan}
          >
            <option value="">Select Locality</option>
            {  
             allDetails.map((detail)=>{if(detail.aC_Name==selectedVidhan){ return (<option className='text-md'  value={detail.loc_ID}>{detail.village_Name}  &nbsp;       &nbsp;  &nbsp;    &nbsp;  &nbsp;    &nbsp;  &nbsp;  &nbsp;       &nbsp;  &nbsp;    &nbsp;  &nbsp;    &nbsp;  &nbsp; location Id-{detail.loc_ID}</option>)}})
            }
          </select>
        </div>
    
      </form>
    </div>
  );
};

export default SelectVidhanlocality;
