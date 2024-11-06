import React,{useState} from 'react'
import SelectVidhanlocality from '../SelectVidhanlocality';



const Facilities =[{
    content:"Electricity Supply (ଫଦିୁୟତ ହମାଗାଣ)",
    ratio:"	12 to 22 Hours(12ରୁ 22 ଘଣ୍ଟା))"
},
{
    content:"Condition of Roads (ଯାସ୍ତାଯ ଅଫସ୍ଥା)",
    ratio:"	Average (ସେମିତି)"
},
{
    content:"Drinking Water (଩ାନୀୟ ଜ଱)",
    ratio:"	Average (ସେମିତି)"
},
{
    content:"Govt hospitals & health services (ସଯକାଯୀ ଡାକ୍ତଯଖ୍ାନା ଓ ସ୍ୱାସ୍ଥୟ ହସଫ)",
    ratio:"Good (ଭଲ)"
},
{
    content:"Govt Schools (ସଯକାଯୀ ଫିଦୟା଱ୟ)",
    ratio:"	Average (ସେମିତି)"
},
{
    content:"Employment Opportunities (ନମିୁକ୍ତିସୁହମାଗ)",
    ratio:"	Poor (ଖରାପ)"
},
{
    content:"Stray cattle (ଫୁରା ହଗାଯୁ)",
    ratio:"Not a problem(ଏହା କୌଣସି ସମସ୍ୟା ନୁହେଁ)"
},
{
    content:"Fertilizer availability (ସାଯ ଉ଩ରବ୍ଧତା)",
    ratio:"Not a problem(ଏହା କୌଣସି ସମସ୍ୟା ନୁହେଁ)"
}]


const ConditionFacilities = () => {

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

                <h2 className="ml-2    font-bold text-green-950">
                Condition of Facilities (ସୁଫଧିାଗୁଡକିଯ ଅଫସ୍ଥା)
                </h2>
                
                  <table className='mx-2' style={{borderCollapse:'separate'}}>

                {Facilities.map((facility,i)=>{
                     return <tr className='bg-[#f7f4f4]' key={i}>
                        <td className='px-2'>{facility.content}</td>
                        <td className='px-2'>{facility.ratio}</td>
                      </tr>
                })}



                  </table>





                </div>
    
    
    </>
  )
}

export default ConditionFacilities
