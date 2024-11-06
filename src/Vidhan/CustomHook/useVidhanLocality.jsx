import React, { useState } from 'react'

const useVidhanLocality  = () => {

    const vidhans = [
        { id: 'vidhan1', name: 'Vidhan Sabha 1', localities: ['Locality A1', 'Locality A2', 'Locality A3'] },
        { id: 'vidhan2', name: 'Vidhan Sabha 2', localities: ['Locality B1', 'Locality B2', 'Locality B3'] },
        { id: 'vidhan3', name: 'Vidhan Sabha 3', localities: ['Locality C1', 'Locality C2', 'Locality C3'] },
      ];

    const [vidhan, setVidhan] = useState('');
    const [locality, setLocality] = useState('');
     
    const handleVidhan=(vidhanId)=>{ setVidhan(vidhanId);setLocality('');}

  
   
    const handleLocality=(locality)=>{ setLocality(locality)}



    const getLocalities = (vidhans, vidhanId) => {
      const selected = vidhans.find((Vidhan) => Vidhan.id === vidhanId);
      console.log(selected);
      return selected ? selected.localities : [];
    };
    


  return {
    setVidhan,
    setLocality,
    handleVidhan,
    handleLocality,
    getLocalities,
  }
}

export default useVidhanLocality;
