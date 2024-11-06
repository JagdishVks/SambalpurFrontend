import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { fetchLocations } from '../app/features/getAllLocationSlice';





export const Status = () => {

  const dispatch=useDispatch();
  
  let getlocations= useSelector((state) => state.statusLocs.Locationinfo);
  const status=useSelector((state) => state.statusLocs.Locationinfo);
  // const error=useSelector((state)=>state.locations.Locationinfo);


  useEffect(()=>{

    dispatch(fetchLocations());
    
  },[]);

   if (status === 'loading') {
     return <p>Loading locations...</p>;
   }


   console.log(getlocations)
    const onScrollFucntion=()=>{console.log("table scrlling")}
  return (
    <>
    <div className=" flex justify-around">
        <h1 className='p-2 bg-green-700 text-green-100 rounded-md font-bold font-mono'>Today location</h1>
        <h1 className='p-2 bg-green-700 text-green-100 rounded-md font-bold font-mono'>Completed Locations(2646)</h1>
        
        <h1 className='p-2 bg-green-700 text-green-100 rounded-md font-bold font-mono'>Completed Booth(3644)</h1>
        
        <h1 className='p-2 bg-green-700 text-green-100 rounded-md font-bold font-mono'>Pending(65)</h1>
    </div>

    <h1 className='font-mono  font-bold   text-[30px] bg-green-200 text-green-950 my-3 text-center'>Today Completed Locations(0)</h1>
<div className="scroll-container" style={{ maxHeight: '200px', overflowY: 'auto' }} onScroll={onScrollFucntion}>
        <table  style={{"borderCollapse":'separate',"width":'100%'}}>
          <thead>
            <tr>
              <th className=" px-4 py-2 border border-4 border-[#FAFAF1] sticky bg-white top-0">AC_Name</th>
              <th className=" px-4 py-2 border border-4 border-green-100 sticky bg-white top-0 ">Village Name</th>
            </tr>
          </thead>
          <tbody>
            {
            
             
              
            
            
            
            }
          </tbody>
        </table>
      </div>

    
      <h1 className='font-mono  font-bold  mt-20 text-[30px] bg-green-200 text-green-950 my-3 text-center'> Completed Locations(2646)</h1>
    <div className="scroll-container" style={{ maxHeight: '300px', overflowY: 'auto' }} onScroll={onScrollFucntion}>
        <table  style={{"borderCollapse":'separate',"width":'100%'}}>
          <thead>
            <tr>
              <th className=" px-4 py-2 border border-4 border-[#FAFAF1] sticky bg-white top-0">AC_Name</th>
              <th className=" px-4 py-2 border border-4 border-green-100 sticky bg-white top-0 ">Village Name</th>
            </tr>
          </thead>
          <tbody>
            {
              
    [...getlocations]
    .sort((a, b) => a.aC_Name.localeCompare(b.aC_Name)).map((loc, index) => (
                <tr key={index}>
                  <td className=" bg-[#FAFAFA] text-center text-green-900  px-20 py-2">{loc.aC_Name}</td>
                  <td className="bg-[#FAFAFA] text-green-600 pl-10 py-2"><Link to={`/User/status/details/${loc.loc_ID}`}>{loc.village_Name}</Link> </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
