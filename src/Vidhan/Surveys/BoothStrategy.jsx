import React,{useState} from 'react'
import SelectVidhanlocality from '../SelectVidhanlocality'

export const BoothStrategy = () => {

    const [selectedVidhan, setSelectedVidhan] = useState("");
    const [selectedLocality, setSelectedLocality] = useState("");

    const handleVidhanChange = (vidhan) => {
        setSelectedVidhan(vidhan);
    };

    const handleLocalityChange = (locality) => {
        setSelectedLocality(locality);
    };

  return (
    <>

<div className="md:w-[70%] w-full border-solid border-2  p-4 border-green-950  rounded-[12px] md:mx-auto mt-10">
                <SelectVidhanlocality onVidhanChange={handleVidhanChange} onLocalityChange={handleLocalityChange} />

                <h2 className="m-4  font-bold text-green-950">
                Suggested Locality/ Booth strategy (ପ୍ରସ୍ତାଫିତ ଅଞ୍ଚ଱/ ଫୁଥ୍ ଯଣନୀତି)
                </h2>


                <textarea className='px-3' rows={16} cols={6}>
                    Drinking water 
                    Road
                    Street light 
                </textarea>


                
  </div>

    </>
  )
}
