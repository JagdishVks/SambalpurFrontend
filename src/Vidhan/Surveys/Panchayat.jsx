import React ,{useState} from 'react'
import SelectVidhanlocality from '../SelectVidhanlocality';


const tableHeaders=[
    "Name of the person (ଫୟକ୍ତିଙ୍କ ନାଭ)",
    "Gender (ରିଙ୍ଗ)",
    "Age (ଫୟସ)",
    "Community (ସମ୍ପ୍ରଦାୟ)",
    "Mobile (କଭାଫାଇର)",
    "Party",
    "Impact (ପ୍ରବାଫ)"
  ]

const  tabledata =
[
    {
      "nameOfThePerson": "Sumitra Naik",
      "gender": "Female",
      "age": 25,
      "community": "Sc",
      "mobile": "74378764",
      "party": "Others",
      "impact": "Med"
    }
  ]
  
  
const Panchayat = () => {
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
                Panchayat members, Ward members, Other elected persons and Important Local People
                (଩ଞ୍ଚାୟତ ସବୟ, ୱାର୍ବସବୟ, ଅନୟ ନିଫବାଚିତ ଫୟକ୍ତିଓ ଗୁଯୁତ୍ୱ଩ ର୍ଣ୍ବସ୍ଥାନୀୟ ଫୟକ୍ତି)
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
                                    <td className=" text-center ">{data.nameOfThePerson}</td>
                                    <td className="text-center">{data.gender}</td>
                                    <td className="text-center">{data.age}</td>
                                    <td className="text-center">{data.community}</td>
                                    <td className="text-center">{data.mobile}</td>
                                    <td className="text-center">{data.party}</td>
                                    <td className="text-center">{data.impact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


    </div>
    
    
    </>
  )
}

export default Panchayat;
