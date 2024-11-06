import React,{useState} from 'react'
import SelectVidhanlocality from '../SelectVidhanlocality';



const tableData=[
    {
      party: "Others",
      nameOfTheWorker: "V",
      community: "",
      gender: "Male",
      age: "",
      mobile: "",
      impact: "Med"
    }
  ]
  

const tableHeaders= [
    "Party (ଦ଱)",
    "Name of the worker (କଭବକର୍ତ୍ବାଙ୍କ ନାଭ)",
    "Community (ସମ୍ପ୍ରଦାୟ)",
    "Gender (ରିଙ୍ଗ)",
    "Age (ଫୟସ)",
    "Mobile (କଭାଫାଇର)",
    "Impact (ପ୍ରବାଫ)"
  ]
  


const WorkersAnnoyed = () => {
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
   
   <div className="md:w-[80%] w-full border-solid border-2  p-4 border-green-950  rounded-[12px] md:mx-auto mt-10">
                <SelectVidhanlocality onVidhanChange={handleVidhanChange} onLocalityChange={handleLocalityChange} />

                <h2 className="m-4  font-bold text-green-950">
                Workers Annoyed with their Parties <br/> (ନିଜ ଦ଱ ପ୍ରତିଅସନ୍ତୁ ଷ୍ଟ ଥିଫା କଭବକର୍ତ୍ବା)
                </h2>

                 
                <table 
                        style={{borderSpacing: "7px 8px", borderCollapse: "separate"}}
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
                            {tableData.map((data, index) => (
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

export default WorkersAnnoyed;
