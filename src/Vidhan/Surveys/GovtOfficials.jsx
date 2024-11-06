import React, { useState } from 'react'
import SelectVidhanlocality from '../SelectVidhanlocality';



const tableHeaders = [
    "Post (କ଩ାଷ୍ଟ)",
    "Name of the govt employee (ସଯକାଯୀ କଭବଚାଯୀଙ୍କ ନାଭ)",
    "Gender (ରିଙ୍ଗ)",
    "Age (ଫୟସ)",
    "Community (ସମ୍ପ୍ରଦାୟ)",
    "Mobile (କଭାଫାଇର)"
];


const tabledata = [
    {
        post: "Police ",
        name: "Upendra Sahoo",
        gender: "Male ",
        age: 22,
        community: "SC ",
        mobile: "824908517"
    }
];






export const GovtOfficials = () => {
    const [selectedVidhan, setSelectedVidhan] = useState("");
    const [selectedLocality, setSelectedLocality] = useState("");

    const handleVidhanChange = (vidhan) => {
        setSelectedVidhan(vidhan);
    };

    const handleLocalityChange = (locality) => {
        setSelectedLocality(locality);
    };

     axiosInstance.get(`/StatusGovtOfficialsWorking/${id}`);
    setGovtOfficials(govtOfficialsResponse.data);
    console.log("Government Officials:", govtOfficialsResponse.data);
    return (
        <>

            <div className="md:w-[70%] w-full border-solid border-2  p-4 border-green-950  rounded-[12px] md:mx-auto mt-10">
                <SelectVidhanlocality onVidhanChange={handleVidhanChange} onLocalityChange={handleLocalityChange} />

                <h2 className="m-4  font-bold text-green-950">
                    Govt Officials Working in the Locality (ସ୍ଥାନୀୟ ଅଞ୍ଚ଱କଯ କାମବୟଯତ ସଯକାଯୀ ଅଧିକାଯୀ)
                </h2>



                <table
                    style={{ borderSpacing: "13px 5px", borderCollapse: "separate" }}
                    className='min-w-full table-auto'
                >
                    <thead>
                        <tr>
                            {tableHeaders.map((header, index) => (
                                <th key={index} className={index === 0 ? "text-green-950 p-2  text-nowrap" : ""}>
                                    {header.includes("<br/>") ? (
                                        <div className=" bg-[rgba(0,0,0,0.2)]" dangerouslySetInnerHTML={{ __html: header }} />
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
                                <td className=" text-center ">{data.post}</td>
                                <td className="text-center">{data.name}</td>
                                {/* <td className="text-center">{data.community}</td> */}
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
