import React,{useState} from 'react'
import SelectVidhanlocality from '../SelectVidhanlocality'



const tableHeaders=[
    
    "Name of the organization (କଭବକର୍ତ୍ବାଙ୍କ ନାଭ)	",
   "Impact(ପ୍ରବାଫ)",
   "Impact in which groups(କକଉଁକଗାଷ୍ଠୀକଯ ପ୍ରବାଫ?)",
   "Important person(ଗୁଯୁତ୍ୱ଩ୂର୍ଣ୍ବଫୟକ୍ତି)	",
  "Mobile(କଭାଫାଇର)"]


 const tabledata=[
    {name:"Maa khumbeswari shg",
        impact:"High",
        group:"Obc",
        person:"Gopal pradhan",
        mobile:"7894840817"
    }
    ,{name:"Maa saraswati shg",
        impact:"Med",
        group:"Obc",
        person:"Supriya behera",
        mobile:"8908325833"
    }
 ]   
export const SocialAndPolitical = () => {


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
                <SelectVidhanlocality onVidhanChange={handleVidhanChange}
                       onLocalityChange={handleLocalityChange} />

                <h2 className="m-4  font-bold text-green-950">
                Social and political organisations active in the area (ଏହିଅଞ୍ଚ଱କଯ ସକ୍ରିୟ ଥିଫା ସାଭାଜିକ ଓ ଯାଜକନୈତିକ ସଂଗଠନ) 
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
                                    <td className="text-center">{data.impact}</td>
                                    <td className="text-center">{data.group}</td>
                                    <td className="text-center">{data.person}</td>                                    
                                    <td className="text-center">{data.mobile}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
    </div>
   
    </>
  )
}
