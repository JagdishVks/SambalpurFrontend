import SelectVidhanlocality from "../SelectVidhanlocality";



const ActivePolitician = () => {
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
                Main Developmental Needs of the people of the area? (ଅଞ୍ଚ଱ଫାସୀଙ୍କ ଭୁଖ୍ୟ ଉନ୍ନୟନଭୂ଱କ ଆଫଶୟକତା?)
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

export default ActivePolitician;
