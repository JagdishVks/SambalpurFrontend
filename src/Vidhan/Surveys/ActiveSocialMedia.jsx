import React,{useState} from 'react'
import SelectVidhanlocality from '../SelectVidhanlocality';


const tableHeaders=[
    
    "Name of the Person(ଫୟକ୍ତିଙ୍କ ନାଭ)	",
   "Gender((ରିଙ୍ଗ))",
   "Age(ଫୟସ)",
   "Community(ସମ୍ପ୍ରଦାୟ)	",
   "Party(ଦ଱)",
  "Mobile(କଭାଫାଇର)",
    "Whatsapp(ହଵାଟ୍ସଆପ୍)"
]


 const tabledata=[
    {name:"Dali swain",
        gender:"Female",
        age:"23",
        community:"Gopal pradhan",
        party:"	BJD",
        mobile:"7894840817",
        whatsapp:""
    }
    
 ]   

export const ActiveSocialMedia = () => {

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
                </h2>


                
                <table
                        style={{borderSpacing: "3px 5px", borderCollapse: "separate"}}
                         className='min-w-full table-auto'
                    >
                        <thead>
                            <tr>
                                {tableHeaders.map((header, index) => (
                                    <th key={index} className={index === 0 ? "text-green-950   " : ""}>
                                        {header.includes("<br/> m-2") ? (
                                            <div className=" bg-[rgba(0,0,0,0.2)] flex-wrap " dangerouslySetInnerHTML={{__html: header}} />
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
                                    <td className=" text-center ">{data.name}</td>
                                    <td className="text-center">{data.gender}</td>
                                    <td className="text-center">{data.age}</td>
                                    <td className="text-center">{data.community}</td>  
                                    
                                    <td className="text-center">{data.party}</td>                                    
                                    <td className="text-center">{data.mobile}</td>
                                                                       
                                    <td className="text-center">{data.whatsapp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
    </div>
    
    
    </>
  )
}
