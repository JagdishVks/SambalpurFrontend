import React,{useState} from 'react'
import SelectVidhanlocality from '../SelectVidhanlocality'

export const Willyourarea = () => {
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
                Will your area develop if Union Minister Dharmendra Pradhan is BJP's Lok Sabha candidate?
                (ସ ଯଦି କେନ୍ଦ୍ର ମନ୍ତ୍ରୀ ଧର୍ମେନ୍ଦ୍ର ପ୍ରଧାନ)
                </h2>
                <h1 className='font-mono font-sara border-solid border-2 px-2'>Yes</h1>


                </div>

    
    </>
  )
}
