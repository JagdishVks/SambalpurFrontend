import React, { useEffect, useState } from 'react';
import SelectVidhanlocality from '../SelectVidhanlocality';
import { axiosInstance } from '../../Services';

const tableHeaders = [
  "Booth No (ଫୁଥ୍ ନଂ)",
  "Party (ଦ଱)",
  "Name of Booth Agent (ଫୁଥ୍ ଏକଜଣ୍ଟଙ୍କ ନାଭ)",
  "Community (ସମ୍ପ୍ରଦାୟ)",
  "Gender (ରିଙ୍ଗ)",
  "Age (ଫୟସ)",
  "Mobile (କଭାଫାଇର)"
];

export const BoothAgents = () => {
  const [selectedVidhan, setSelectedVidhan] = useState("");
  const [selectedLocality, setSelectedLocality] = useState("");
  const [boothAgents, setBoothAgents] = useState([]);

  const handleVidhanChange = (vidhan) => {
    setSelectedVidhan(vidhan);
    console.log(selectedVidhan)
  };

  const handleLocalityChange = (locality) => {
    setSelectedLocality(locality);
    // fetchBoothAgents(selectedVidhan, selectedLocality);
  };

  const fetchBoothAgents = async () => {
  
      try {
        const boothAgentsResponse = await axiosInstance.get(`/StatusBoothAgent/${selectedLocality}`);
        setBoothAgents(boothAgentsResponse.data);
        console.log("Booth Agents:", boothAgentsResponse.data);
      } catch (error) {
        console.error("Error fetching booth agents:", error);
      }
    
  };

  useEffect(()=>{fetchBoothAgents();},[selectedLocality])

  return (
    <div className="md:w-[70%] w-full border-solid border-2 p-4 border-green-950 rounded-[12px] md:mx-auto mt-10">
      <SelectVidhanlocality onVidhanChange={handleVidhanChange} onLocalityChange={handleLocalityChange} />
      
      <h2 className="m-4 font-bold text-green-950">
        Booth Agents in the last election (ଗତ ନିଫବାଚନକଯ ଥିଫା ଫୁଥ୍ ଏକଜଣ୍ଟ)
      </h2>

      <table
        style={{ borderSpacing: "3px 5px", borderCollapse: "separate" }}
        className='min-w-full table-auto'
      >
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index} className={index === 0 ? "text-green-950" : ""}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {boothAgents.map((data, index) => (
            <tr className="bg-[#FAFAFA] text-black" key={index}>
              <td className="text-center">{data.boothNo}</td>
              <td className="text-center">{data.party}</td>
              <td className="text-center">{data.agentName}</td>
              <td className="text-center">{data.community}</td>
              <td className="text-center">{data.gender}</td>
              <td className="text-center">{data.age}</td>
              <td className="text-center">{data.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};
