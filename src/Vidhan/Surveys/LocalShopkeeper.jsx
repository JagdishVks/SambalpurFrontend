import React,{useState} from 'react'
import SelectVidhanlocality from '../SelectVidhanlocality'


const tableHeaders=[
"Name of the person (ଫୟକ୍ତିଙ୍କ ନାଭ)",
 "Community (ସମ୍ପ୍ରଦାୟ)",
 "Mobile (କଭାଫାଇର)"
                     
]
const tabledata=[
 {name:"Sridhara sahu",
 community:"	Teli",
 mobile:"9583421652"}
]

export const LocalShopKeeper = () => {
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
                Local Shopkeeper/Businessmen/ Treader (ସ୍ଥାନୀୟ ଦୋକାନୀ / ବ୍ୟବସାୟୀ / ଟ୍ରେଡର୍ |

                </h2>


                
                <table
                        style={{borderSpacing: "3px 5px", borderCollapse: "separate"}}
                         className='min-w-full table-auto'
                    >
                        <thead>
                            <tr>
                                {tableHeaders.map((header, index) => (
                                    <th key={index} className={index === 0 ? "text-green-950   text-wrap" : ""}>
                                        {header.includes("<br/>") ? (
                                            <div className=" bg-[rgba(0,0,0,0.2)]" dangerouslySetInnerHTML={{__html: header}} />
                                        ) : (
                                            header
                                        )}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tabledata.map((data, index) => (
                                <tr className="bg-[#FAFAFA]   text-black" key={index}>
                                    <td className=" text-center ">{data.party}</td>
                                    <td className="text-center">{data.nameOfTheWorker}</td>
                                    <td className="text-center">{data.community}</td>
                                    <td className="text-center">{data.gender}</td>
                                    <td className="text-center">{data.age}</td>
                                    <td className="text-center">{data.mobile}</td>
                                    <td className="text-center">{data.impact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


</div>
    
    </>
  )
}
