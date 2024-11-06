import React, { useState } from 'react'
import SelectVidhanlocality from '../SelectVidhanlocality';


const tableHeaders = [
    "BJP",
    "BJD",
    "INC",
    "Others",
];

const tableData=[  "Good (ଭଲ)","Good (ଭଲ)"	,"Poor (ଖରାପ)",	"Poor (ଖରାପ)"]


const PartyCondition = () => {
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
    
    <div className="md:w-[70%]  border-solid border-2  p-4 border-green-950  rounded-[12px] md:mx-auto mt-10">
                <SelectVidhanlocality onVidhanChange={handleVidhanChange} onLocalityChange={handleLocalityChange} />

                <h2 className="m-4  font-bold text-green-950">
                Condition of political party organization in the area (ଅଞ୍ଚ଱କଯ ଯାଜକନୈତିକ ଦ଱ଯ ସଂଗଠନଯ ସ୍ଥିତି)
                </h2>


                
                <div className="">
                    <table
                        style={{borderSpacing: "10px 15px",width:"100%", borderCollapse: "separate"}}
                        class="table table-bordered">
                        <thead>
                            <tr>
                                {tableHeaders.map((header, index) => (
                                    <th key={index} className={index === 0 ? "text-green-950 mx-2 w-[25%]" : ""}>
                                        {header.includes("<br/>") ? (
                                            <div className="" dangerouslySetInnerHTML={{__html: header}} />
                                        ) : (
                                            header
                                        )}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            
                        <tr className="bg-[#FAFAFA]    text-black" >
                        {tableData.map((header, index) => (
                                    <td className=" text-center ">{header}</td>
                                    
                            ))}
                            
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
    
    
    </>
  )
}

export default PartyCondition;
