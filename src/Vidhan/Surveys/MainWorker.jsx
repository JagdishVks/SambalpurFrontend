import React,{useEffect, useState} from 'react'
import SelectVidhanlocality from '../SelectVidhanlocality'
import { axiosInstance } from '../../Services'



const tableHeaders=[
    "Party (ଦ଱)",
    "Name of the Worker( କଭବକର୍ତ୍ବାଙ୍କ ନାଭ)",
    "Community( ସମ୍ପ୍ରଦାୟ)",
    "Gender(ରିଙ୍ଗ)",
    "Age (ଫୟସ)",
    "Mobile( କଭାଫାଇର)",
    "Impact( Impact)"
  ]

const tabledata =[
        {
          party: "BJP",
          nameOfTheWorker: "Saroj Kumar Mishra",
          community: "Gen",
          gender: "Male",
          age: 51,
          mobile: "7873375414",
          impact: ""
        }
      ]
      
  
  

const MainWorker = () => {
    const [selectedVidhan, setSelectedVidhan] = useState("");
    const [selectedLocality, setSelectedLocality] = useState("");
    const [mainWorker, setmainWorker] = useState([])

    const handleVidhanChange = (vidhan) => {
        setSelectedVidhan(vidhan);
    };
       useEffect(()=>{
        axiosInstance.get(`/StatusMainWorker/${selectedLocality}`)
                    .then(res=>setmainWorker(res.data))
                    .catch(err=>console.log(err))
        },[selectedLocality])

    const handleLocalityChange = (locality) => {
        setSelectedLocality(locality);
    };
  return (
    <>
    
    <div className="md:w-[70%] w-full border-solid border-2  p-4 border-green-950  rounded-[12px] md:mx-auto mt-10">
                <SelectVidhanlocality onVidhanChange={handleVidhanChange} onLocalityChange={handleLocalityChange} />

                <h2 className="m-4  font-bold text-green-950">
                Main Developmental Needs of the people of the area? (ଅଞ୍ଚ଱ଫାସୀଙ୍କ ଭୁଖ୍ୟ ଉନ୍ନୟନଭୂ଱କ ଆଫଶୟକତା?)
                </h2>


                
                <table
                        style={{borderSpacing: "3px 5px",overflow:"scrollY", borderCollapse: "separate"}}
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

export default MainWorker;
