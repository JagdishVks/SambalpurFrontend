import React, { useEffect, useState } from "react";
import SelectVidhanlocality from "../SelectVidhanlocality";
import { axiosInstance } from "../../Services";

const tableHeaders = [
  "Name of the Group Leader (କଗାଷ୍ଠୀ କନତାଙ୍କ ନାଭ)",
  "Community (ସମ୍ପ୍ରଦାୟ)",
  "Mobile (କଭାଫାଇର କପା)",
  "Leaning to which party (କକଉଁଦ଱କୁନଉଁଛନ୍ତି)",
];

const LocalGroupsPolitical = () => {
  const [selectedVidhan, setSelectedVidhan] = useState("");
  const [selectedLocality, setSelectedLocality] = useState("");
  const [importantGroups, setImportantGroups] = useState([]);

  const handleVidhanChange = (vidhan) => {
    setSelectedVidhan(vidhan);

  };

  const handleLocalityChange = (locality) => {
    setSelectedLocality(locality);
  };

  const fetchImportantGroups = async (locality) => {
    try {
      const response = await axiosInstance.get(`/StatusImportantGroups/${locality}`);
      setImportantGroups(response.data);
    } catch (error) {
      console.error('Error fetching important groups:', error);
    }
  };

  useEffect(() => {
    if (selectedLocality) {
      fetchImportantGroups(selectedLocality);
    }
  }, [selectedLocality]);

  return (
    <div className="md:w-[70%] w-full border-solid border-2 p-4 border-green-950 rounded-[12px] md:mx-auto mt-10">
      <SelectVidhanlocality onVidhanChange={handleVidhanChange} onLocalityChange={handleLocalityChange} />

      <h2 className="m-4 font-bold text-green-950">
        Important local groups and political people who impact the election in the area? (ଏହିଅଞ୍ଚ଱କଯ
        ନଫିବାଚନକୁପ୍ରବାଫିତ କଯୁଥିଫା ଗୁଯୁତ୍ୱ଩ର୍ଣ୍ୂ ବସ୍ଥାନୀୟ କଗାଷ୍ଠୀ ଏଫଂ ଯାଜକନୈତିକ କରାକ?)
      </h2>

      <div>
        <table style={{ borderSpacing: "10px 15px", borderCollapse: "separate" }} className="table table-bordered">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} className={index === 0 ? "text-green-950 mx-2 w-[25%]" : ""}>
                  {header.includes("<br/>") ? (
                    <div dangerouslySetInnerHTML={{ __html: header }} />
                  ) : (
                    header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {importantGroups.map((data, index) => (
              <tr className="bg-[#FAFAFA] text-black" key={index}>
                <td className="text-center">{data.p_Name}</td>
                <td className="text-center">{data.p_Party}</td>
                <td className="text-center">{data.p_Mobile}</td>
                <td className="text-center">{data.p_Community}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LocalGroupsPolitical;
