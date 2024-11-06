import React, { useState, useEffect } from 'react';
import SelectVidhanlocality from '../SelectVidhanlocality';
import { axiosInstance } from '../../Services'; 

const tableHeaders = [
    "Group(କଗାଷ୍ଠୀ)",
    "Community(ସମ୍ପ୍ରଦାୟ)",
    "Total families & Votes(ସଭୁଦାୟ ଩ଯିଫାଯ ଏଫଂକବାଟ)",
    "Important_Person_1((ସମ୍ପ୍ରଦାୟଯ ଗୁଯୁତ୍ୱ଩ୂର୍ଣ୍ବଫୟକ୍ତି)",
    "Mobile(କଗାଷ୍ଠୀ)",
    "Important_Person_2((ସମ୍ପ୍ରଦାୟଯ ଗୁଯୁତ୍ୱ଩ୂର୍ଣ୍ବଫୟକ୍ତି)",
    "Mobile(କଗାଷ୍ଠୀ)",
    "Important_Person_3((ସମ୍ପ୍ରଦାୟଯ ଗୁଯୁତ୍ୱ଩ୂର୍ଣ୍ବଫୟକ୍ତି)",
    "Mobile(କଗାଷ୍ଠୀ)",
    "Party1(କଭାଫାଇର)",
    "Party2(କଭାଫାଇର)",
    "Party3(କଭାଫାଇର)"
];

const CommunitiesandImportantPeople = ({title}) => {
    const [selectedVidhan, setSelectedVidhan] = useState("");
    const [selectedLocality, setSelectedLocality] = useState("");
    const [communityPeople, setCommunityPeople] = useState([]);

    const handleVidhanChange = (vidhan) => {
        setSelectedVidhan(vidhan);
    };

    const handleLocalityChange = (locality) => {
        setSelectedLocality(locality);
    };

    useEffect(() => {
        if (selectedLocality) {
            const fetchCommunityPeople = async () => {
                try {
                    const response = await axiosInstance.get(`/StatusCommunityPeople/${selectedLocality}`);
                    setCommunityPeople(response.data);
                    console.log(response.data)
                } catch (error) {
                    console.error('Error fetching community people:', error);
                }
            };

            fetchCommunityPeople();
        }
    }, [selectedLocality]);

    return (
        <>
            <div className="overflow-x-auto overflow-y-auto max-h-100 w-full border-solid border-2 p-4 border-green-950 rounded-[12px] md:mx-auto mt-10">
                <SelectVidhanlocality onVidhanChange={handleVidhanChange} onLocalityChange={handleLocalityChange} />
                <h2 className="ml-2 font-bold text-green-950">
                    Condition of Facilities (ସୁଫଧିାଗୁଡକିଯ ଅଫସ୍ଥା)
                </h2>
                <table style={{ borderSpacing: "3px 5px", borderCollapse: "separate" }} className="min-w-full table-auto">
                    <thead>
                        <tr>
                            {tableHeaders.map((header, index) => (
                                <th key={index} className={index === 0 ? "text-green-950 text-wrap" : ""}>
                                    {header.includes("<br/>") ? (
                                        <div className="bg-[rgba(0,0,0,0.2)]" dangerouslySetInnerHTML={{ __html: header }} />
                                    ) : (
                                        header
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {communityPeople.map((data, index) => (
                            <tr className="bg-[#FAFAFA] text-black" key={index}>
                                <td className="text-center">{data.category}</td>
                                <td className="text-center">{data.community}</td>
                                <td className="text-center">{data.vote}</td>
                                <td className="text-center">{data.imp_Name_1}</td>
                                <td className="text-center">{data.imp_Name_2}</td>
                                <td className="text-center">{data.imp_Name_3}</td>
                                <td className="text-center">{data.imp_Mobile_1}</td>
                                <td className="text-center">{data.imp_Mobile_2}</td>
                                <td className="text-center">{data.imp_Mobile_3}</td>
                                <td className="text-center">{data.party}</td>
                                <td className="text-center">{data.Party_2}</td>
                                <td className="text-center">{data.Party_3}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CommunitiesandImportantPeople;
