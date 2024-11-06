import React,{useState} from "react";
import SelectVidhanlocality from "../SelectVidhanlocality";


const data=
[
    {number:1,res:"Raid"},
    {number:2,res:"Farner"},
    {number:3,res:"water"}
]


const MainDevelopment = () => {
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
                  Main development work carried out by MLA/MP in the area?<br/>
                 (ଏହିଅଞ୍ଚ଱କଯ ଫିଧାୟକ/ସାଂସଦଙ୍କ ଦ୍ୱାଯା କହାଇଥିଫା ଭୁଖ୍ୟ ଉନ୍ନୟନ ଭୂ଱କ କାମବୟ?)
                </h2>
                <table className="md:ml-2 ml-0" style={{borderCollapse:'separate',width:'100%',borderSpacing:"20%"}}>
                <tbody>
                {data.map((data, index ) => (
                    <tr key={index}>   
                    <td className="mx-24 bg-[#FAFAFA]">{data.number}</td>
                    <td className="mx-24 bg-[#FAFAFA] ">{data.res}</td>
               </tr>
                ))}
                </tbody>
                 </table>

               

            </div>
        </>
    );
};

export default MainDevelopment;
