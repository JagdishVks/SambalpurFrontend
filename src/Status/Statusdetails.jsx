import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../Services";

// const boothDetails = {
//     boothName: "Musapapuli",
//     numberOfBooths: 2,
//     boothNumbers: [1, 2],
//     block: "Angul",
//     panchayat: "Rentalei",
//     vidhanSabha: "Angul",
//     politicalNote: [
//       { party: "BJP", percentage: 90 },
//       { party: "BJD", percentage: 8 },
//       { party: "Congress", percentage: 2 },
//     ],
//     results: [
//       {
//         boothNo: 1,
//         votes: {
//           BJP: 216,
//           BJD: 572,
//           INC: 217,
//           Others: 27,
//           Total: 1032,
//         },
//       },
//       {
//         boothNo: 2,
//         votes: {
//           BJP: 161,
//           BJD: 214,
//           INC: 48,
//           Others: 6,
//           Total: 429,
//         },
//       },
//     ],
//     developmentWork: [
//       "Yaha school ka kaam hua hai"
//     ],
//     mainLocalDemands: [
//       "Peene ka Paani chahiye",
//       "Sadko ka nirman hona chahiye",
//       "Electricity ka high voltage chahiye"
//     ],
//     partyOrganizationCondition: {
//       BJP: "Good",
//       BJD: "Average",
//       INC: "Poor",
//       Others: "Poor",
//     },
//     localPoliticalGroups: [
//       {
//         name: "Santosh Kumar Sahu",
//         community: "Chasa",
//         mobile: "8249426381",
//         party: "BJP",
//       },
//       {
//         name: "Sujit kumar sahu",
//         community: "Chasa",
//         mobile: "9777127701",
//         party: "BJP",
//       },
//       {
//         name: "Manas Ranjan Behra",
//         community: "Gauda",
//         mobile: "9556436071",
//         party: "BJP",
//       },
//       {
//         name: "Prqmod Kumar Behra",
//         community: "Gauda",
//         mobile: "9777916411",
//         party: "BJP",
//       },
//     ],
//     communitiesAndImportantPeople: [
//       {
//         group: "Gen",
//         community: "2. Karan (Kshatriya)",
//         totalVotes: "25/70",
//         importantPeople: [
//           { name: "Subhrajit das", mobile: "7008878108", party: "BJP" },
//           { name: "Rakesh kumar Das", mobile: "7978834255", party: "BJP" },
//         ],
//       },
//       {
//         group: "OBC",
//         community: "11. Chasa",
//         totalVotes: "400/1150",
//         importantPeople: [
//           { name: "Subhrat pradhan", mobile: "6371507069", party: "BJP" },
//           { name: "Sidhanta sahu", mobile: "6371456623", party: "BJD" },
//           { name: "Bhunat Chand pradhan", mobile: "9090574706", party: "BJP" },
//         ],
//       },
//       {
//         group: "SC",
//         community: "31. Paan",
//         totalVotes: "50/200",
//         importantPeople: [
//           { name: "Aju nayak", mobile: "9937248392", party: "BJP" },
//           { name: "Rajesh kumar nayak", mobile: "9078312804", party: "BJP" },
//         ],
//       },
//     ],
//     mainWorkers: [
//       {
//         party: "BJP",
//         name: "Subheat pradhan",
//         community: "Chasa",
//         gender: "Male",
//         age: 30,
//         mobile: "6371507069",
//         impact: "High",
//       },
//       {
//         party: "BJP",
//         name: "Surya kanta bishal",
//         community: "Chasa",
//         gender: "Male",
//         age: 27,
//         mobile: "9348273026",
//         impact: "High",
//       },
//       {
//         party: "BJD",
//         name: "Manas ranjan pradhan",
//         community: "Chasa",
//         gender: "Male",
//         age: 38,
//         mobile: "8249133938",
//         impact: "Low",
//       },
//     ],
//     panchayatMembers: [
//       {
//         name: "Khirol sahu",
//         gender: "Male",
//         age: 42,
//         community: "Chesa",
//         mobile: "6294129739",
//         party: "BJD",
//         impact: "High",
//       },
//       {
//         name: "Sanjay kumar sahu",
//         gender: "Male",
//         age: 40,
//         community: "Dhutsa",
//         mobile: "0",
//         party: "BJD",
//         impact: "High",
//       },
//     ],
//     socialMediaActivists: [
//       {
//         name: "Saroj kumar sahu",
//         gender: "Male",
//         age: 28,
//         community: "Chesa",
//         party: "BJP",
//         mobile: "7848058524",
//       },
//       {
//         name: "Satyajit das",
//         gender: "Male",
//         age: 30,
//         community: "Khutmiya",
//         party: "BJP",
//         mobile: "7873383733",
//       },
//       {
//         name: "Hurblu ranjan sahu",
//         gender: "Male",
//         age: 25,
//         community: "Chesa",
//         party: "BJP",
//         mobile: "7848058524",
//       },
//     ],
//     boothAgents: [
//       {
//         boothNo: 1,
//         party: "BJP",
//         agentName: "Agent Name 1", // Update with actual name
//         community: "Chasa",
//         gender: "Male",
//         mobile: "XXXXXXX", // Update with actual number
//       },
//       // Additional agents can be added here
//     ],
//   };
  
 const StatusDetails = () => {
  
  const {id}=useParams();

  const [getLocName, setgetLocName] = useState([]);
  const [politicalNote, setPoliticalNote] = useState([]);
  const [mainWorkers, setMainWorkers] = useState([]);
  const [panchayatMembers, setPanchayatMembers] = useState([]);
  const [mainLocalDemands, setMainLocalDemands] = useState([]);
  const [localShopKeepers, setLocalShopKeepers] = useState([]);
  const [importantGroups, setImportantGroups] = useState([]);
  const [govtOfficials, setGovtOfficials] = useState([]);
  const [developmentWork, setDevelopmentWork] = useState([]);
  const [contactPersons, setContactPersons] = useState([]);
  const [boothAgents, setBoothAgents] = useState([]);
  const [socialMediaActivists, setSocialMediaActivists] = useState([]);
  const [results, setResults] = useState([]);
  const [partyConditon, setpartyConditon] = useState([]);
  const [localPeople, setLocalPeople] = useState([]);
  const [communityPeople, setCommunityPeople] = useState([]);
  const [areaDevelop, setareaDevelop] = useState([]);



  const fetchData = async () => {
    try {
      
    const AllLocs= await axiosInstance.get(`/all-locs/${id}`)
    .then((res)=>{setgetLocName(res.data);console.log(res.data)})
    .catch((err)=>{console.log(err)});
      // Each API call, setting state, and logging the response
       
      const politicalNoteResponse = await axiosInstance.get(`/political-note/${id}`);
      setPoliticalNote(politicalNoteResponse.data);
      console.log("Political Note:", politicalNoteResponse.data);

      const PartyConditon = await axiosInstance.get(`/party-condition/{Loc_ID}/${id}`);
      setPoliticalNote(PartyConditon.data);
      console.log("Political Note:", PartyConditon.data);
   
       const mainWorkersResponse = await axiosInstance.get(`/main-workers/${id}`);
       setMainWorkers(mainWorkersResponse.data);
       console.log("Main Workers:", mainWorkersResponse.data);
    
      const panchayatMembersResponse = await axiosInstance.get(`/panchayat-members/${id}`);
      setPanchayatMembers(panchayatMembersResponse.data);
      console.log("Panchayat Members:", panchayatMembersResponse.data);
      
      const mainLocalDemandsResponse = await axiosInstance.get(`/local-demands/${id}`);
      setMainLocalDemands(mainLocalDemandsResponse.data);
      console.log("Main Local Demands:", mainLocalDemandsResponse.data);
    
      const localShopKeepersResponse = await axiosInstance.get(`/local-shop-keepers/${id}`);
      setLocalShopKeepers(localShopKeepersResponse.data);
      console.log("Local Shop Keepers:", localShopKeepersResponse.data);
      
      
      const importantGroupsResponse = await axiosInstance.get(`/important-groups/${id}`);
      setImportantGroups(importantGroupsResponse.data);
      console.log("Important Groups:", importantGroupsResponse.data);
      

      const govtOfficialsResponse = await axiosInstance.get(`/govt-officials/${id}`);
      setGovtOfficials(govtOfficialsResponse.data);
      console.log("Government Officials:", govtOfficialsResponse.data);
     
      const developmentWorkResponse = await axiosInstance.get(`/development-work/${id}`);
      setDevelopmentWork(developmentWorkResponse.data);
      console.log("Development Work:", developmentWorkResponse.data);


      const contactPersonsResponse = await axiosInstance.get(`/contact-person/${id}`);
      setContactPersons(contactPersonsResponse.data);
      console.log("Contact Persons:", contactPersonsResponse.data);

      const boothAgentsResponse = await axiosInstance.get(`/booth-agent/${id}`);
      setBoothAgents(boothAgentsResponse.data);
      console.log("Booth Agents:", boothAgentsResponse.data);

      const socialMediaActivistsResponse = await axiosInstance.get(`/social-media-activist/${id}`);
      setSocialMediaActivists(socialMediaActivistsResponse.data);
      console.log("Social Media Activists:", socialMediaActivistsResponse.data);

      const resultsResponse = await axiosInstance.get(`/results/${id}`);
      setResults(resultsResponse.data);
      console.log("Results:", resultsResponse.data);

      const localPeopleResponse = await axiosInstance.get(`/local-people/${id}`);
      setLocalPeople(localPeopleResponse.data);
      console.log("Local People:", localPeopleResponse.data);
      // booth-agent
      const communityPeopleResponse = await axiosInstance.get(`/community-people/${id}`);
      setCommunityPeople(communityPeopleResponse.data);
      console.log("Community People:", communityPeopleResponse.data);
      
      const areaDevelopResponse = await axiosInstance.get(`/area-develop/${id}`);
      setareaDevelop(areaDevelopResponse.data);
      console.log("Panchayat Members:", areaDevelopResponse.data);



    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  

  useEffect(() => {
                 
  fetchData();
    
  }, [id])

  

    return (
      <div className="main main_body    md:m-5 m-0">
        <div className=" p-3 md:ml-10 ml-3">


      { getLocName.map((item)=><>    
        <u className="font-mono text-[3vw] text-green-800">{item.village_Name}</u>
              <p className="my-2 text-md  font-mono font-bold">
              Block - <strong className="text-green-800">{item.village_Name}</strong>, 
              Panchayat: <strong className="text-green-800">{item.aC_Name}</strong>, 
              Vidhan Sabha: <strong className="text-green-800">{item.village_Name}</strong>
            </p></> )}
          <h3 className="flex text-green-500 font-bold gap-[10px] items-center">
         
              
{/*             
            <span>(No of Booths: {boothDetails.numberOfBooths})</span>
            <span>(Booth nos: {boothDetails.boothNumbers.join(', ')})</span> */}
          </h3>
          
  
          <h3 className="font-mono text-2xl underline underline-offset-8 mt-4 p-2 text-green-800 bg-[#FAFAFA] ">Political Note:</h3>
          <p>
            
              <span className="font-intern">{politicalNote[0]} </span>
          
          </p>
  
          <h3 className="font-mono text-2xl bg-[#FAFAFA] underline underline-offset-8 p-2 text-green-800 mt-5 mb-5">Results: LS 2019</h3>
          <table className="table w-full md:w-[80%] border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="font-mono text-2xl border-solid text-center border-[1px] rounded-[10px] border-black text-green-800">Booth No</th>
                <th className="font-mono text-2xl border-solid text-center border-[1px] rounded-[10px] border-black text-green-800">BJP</th>
                <th className="font-mono text-2xl border-solid text-center border-[1px] rounded-[10px] border-black text-green-800">BJD</th>
                <th className="font-mono text-2xl border-solid text-center border-[1px] rounded-[10px] border-black text-green-800">INC</th>
                <th className="font-mono text-2xl border-solid text-center border-[1px] rounded-[10px] border-black text-green-800">Others</th>
                <th className="font-mono text-2xl border-solid text-center border-[1px] rounded-[10px] border-black text-green-800">Total</th>
              </tr>
            </thead>
            <tbody>
               {results.map((result, index) => (
                <tr key={index}>
                  <td className="bg-gray-100 text-center  ">{results.boothAgents}</td>
                  <td className="bg-gray-100 text-center ">{result.bjp}</td>
                  <td className="bg-gray-100 text-center ">{result.bjd}</td>
                  <td className="bg-gray-100 text-center ">{result.inc}</td>
                  <td className="bg-gray-100 text-center ">{result.oth}</td>
                  <td className="bg-gray-100 text-center">{result.total}</td>
                </tr>
              ))} 
              <tr>
                <td className="font-bold text-center">Total</td>
                <td className="font-bold text-center">{results.reduce((sum, r) => sum + Number(r.bjp),0 )}</td>
                <td className="font-bold text-center">{results.reduce((sum, r) => sum + Number(r.bjd),0 )}</td>
                <td className="font-bold text-center">{results.reduce((sum, r) => sum + Number(r.inc),0 )}</td>
                <td className="font-bold text-center">{results.reduce((sum, r) => sum + Number(r.oth),0 )}</td>
                <td className="font-bold text-center">{results.reduce((sum, r) => sum + r.Total, 0)}</td>
              </tr>
            </tbody>
          </table>
  
          <h3 className="font-mono text-2xl bg-[#FAFAFA] underline underline-offset-8 p-2 mt-5 text-green-800">Development Work Carried Out by MLA/MP</h3>
         
          <ul >
            {developmentWork.map((work, index) => (
              <li className="text-green-950" key={index}>{work.mlA_Work_Done}</li>
            ))}
          </ul>
  
          <h3  className="font-mono text-2xl bg-[#FAFAFA] underline underline-offset-8 p-2 mt-5 mb-2 text-green-800">Main Local Demands</h3>
          <ul>
            {mainLocalDemands.map((demand, index) => (
              <li  className="text-green-950 font-inter" key={index}>{demand}</li>
            ))}
          </ul>
  
          <h3  className="font-mono underline underline-offset-8 p-2 text-2xl bg-[#FAFAFA] mt-5 mb-2 text-green-800">Condition of Party Organization</h3>
          
          <ul>
            {Object.entries(partyConditon).map(([party, condition], index) => (
              <li key={index}>{party}: <strong>{condition}</strong></li>
            ))}
          </ul> 
  
          <h3 className="font-mono text-2xl bg-[#FAFAFA] text-green-800 my-5 underline underline-offset-8 p-2">Local Political Groups</h3>
          <table className="table w-full mb-5 md:w-[80%] border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="font-mono text-2xl border-[2px] rounded-[5px] text-green-800">Name</th>
                <th className="font-mono text-2xl border-[2px] rounded-[5px] text-green-800">Community</th>
                <th className="font-mono text-2xl border-[2px] rounded-[5px] text-green-800">Mobile</th>
                <th className="font-mono text-2xl border-[2px] rounded-[5px] text-green-800">Party</th>
              </tr>
            </thead>
            <tbody>
              {importantGroups.map((group, index) => (
                <tr className="text-green-950 text-center" key={index}>
                  <td className="bg-[#FAFAFA] ">{group.p_Name}</td>
                  <td className="bg-[#FAFAFA] ">{group.p_Community}</td>
                  <td className="bg-[#FAFAFA]">{group.p_Mobile}</td>
                  <td className="bg-[#FAFAFA] ">{group.p_Party}</td>
                </tr>
              ))}
            </tbody>
          </table>
  
          <h3 className="font-mono text-2xl bg-[#FAFAFA] p-2 mb-5 text-green-800 underline underline-offset-8">Communities and Important People</h3>
          {communityPeople.map((group, index) => (
            <div key={index}  >
              <h4 className="border-[2px] bg-gray-50 font-medium mt-5 border-green-900 rounded-[10px] max-w-fit p-1">{group.category} ({group.community}) - Total Votes: {group.totalVotes}</h4>
              <ul className="ml-3 text-green-800">
                
                  <li key={index}>{group.imp} (Mobile: {group.imp_Mobile_1}, Party: {group.party})</li>
                  
                  <li key={index}>{group.name} (Mobile: {group.imp_Mobile_2}, Party: {group.party_2})</li>
                  
                  <li key={index}>{group.name} (Mobile: {group.imp_Mobile_3}, Party: {group.party_3})</li>
              
              </ul>
            </div>
          ))}
  
          <h3 className="font-mono text-2xl bg-[#FAFAFA] text-green-800 my-5 underline underline-offset-8 p-2">Main Workers</h3>
          <table className="table w-full md:w-[80%] border-separate border-spacing-2">
            <thead>
              <tr >
                <th className="font-mono text-2xl border-[2px] rounded-[5px] text-green-800">Party</th>
                <th className="font-mono text-2xl border-[2px] rounded-[5px] text-green-800">Name</th>
                <th className="font-mono text-2xl border-[2px] rounded-[5px] text-green-800">Community</th>
                <th className="font-mono text-2xl border-[2px] rounded-[5px] text-green-800">Gender</th>
                <th className="font-mono border-[2px] rounded-[5px] text-2xl text-green-800">Age</th>
                <th className="font-mono border-[2px] rounded-[5px] text-2xl text-green-800">Mobile</th>
                <th className="font-mono border-[2px] rounded-[5px] text-2xl text-green-800">Impact</th>
              </tr>
            </thead>
            <tbody>
              {mainWorkers.map((worker, index) => (
                <tr className="text-center" key={index}>
                  <td className="bg-[#FAFAFA] ">{worker.worker_Name}</td>
                  <td className="bg-[#FAFAFA]">{worker.community}</td>
                  <td className="bg-[#FAFAFA]">{worker.gender}</td>
                  <td className="bg-[#FAFAFA] ">{worker.age}</td>
                  <td className="bg-[#FAFAFA] ">{worker.mobile}</td>
                  <td className="bg-[#FAFAFA] ">{worker.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
  
          <h3 className="font-mono text-2xl bg-[#FAFAFA] text-green-800 my-5 underline underline-offset-8 p-2">Panchayat Members</h3>
          <table className="table w-full md:w-[80%] border-separate border-spacing-2">
            <thead>
              <tr className="text-green-800 ">
                <th className="font-mono text-2xl  border-[2px] ">Name</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Gender</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px]  border-[2px]">Age</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Community</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Mobile</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Party</th>
              </tr>
            </thead>
            <tbody>
              {panchayatMembers.map((member, index) => (
                <tr className="text-center" key={index}>
                  <td className="bg-[#FAFAFA]">{member.worker_Name}</td>
                  <td className="bg-[#FAFAFA] ">{member.gender}</td>
                  <td className="bg-[#FAFAFA] ">{member.age}</td>
                  <td className="bg-[#FAFAFA]">{member.community}</td>
                  <td className="bg-[#FAFAFA] ">{member.mobile}</td>
                  <td className="bg-[#FAFAFA] ">{member.party}</td>
                </tr>
              ))}
            </tbody>
          </table>


          
          <h3 className="font-mono text-2xl bg-[#FAFAFA] text-green-800 my-5 underline underline-offset-8 p-2">Social Media Activist</h3>
          <table className="table w-full md:w-[80%] border-separate border-spacing-2">
            <thead>
              <tr className="text-green-800 ">
                <th className="font-mono text-2xl  border-[2px] ">Name</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Gender</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px]  border-[2px]">Age</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Community</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Mobile</th>
                </tr>
                </thead>
                <tbody>
              {socialMediaActivists.map((member, index) => (
                <tr className="text-center" key={index}>
                  <td className="bg-[#FAFAFA]">{member.worker_Name}</td>
                  <td className="bg-[#FAFAFA] ">{member.gender}</td>
                  <td className="bg-[#FAFAFA] ">{member.age}</td>
                  <td className="bg-[#FAFAFA]">{member.community}</td>
                  <td className="bg-[#FAFAFA] ">{member.mobile}</td>
                  <td className="bg-[#FAFAFA] ">{member.party}</td>
                </tr>
              ))}
            </tbody>
             </table>


             
          <h3 className="font-mono text-2xl bg-[#FAFAFA] text-green-800 my-5 underline underline-offset-8 p-2">Booth Agents In the Last Election</h3>
          <table className="table w-full md:w-[80%] border-separate border-spacing-2">
            <thead>
              <tr className="text-green-800 ">
                
              <th className="font-mono text-2xl  border-[2px] ">Booth No</th>
                <th className="font-mono text-2xl  border-[2px] ">Party</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Name of the Booth Agent</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px]  border-[2px]">Community</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Gender</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Age</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Mobile</th>
                </tr>
                </thead>
                <tbody>
              {boothAgents.map((booth, index) => (
                <tr className="text-center" key={index}>
                  <td className="bg-[#FAFAFA]">{booth.booth_no_Agent}</td>
                  <td className="bg-[#FAFAFA] ">{booth.party}</td>
                  <td className="bg-[#FAFAFA] ">{booth.booth_Agent_Name}</td>
                  
                  <td className="bg-[#FAFAFA] ">{booth.community}</td>
                  <td className="bg-[#FAFAFA]">{booth.gender}</td>
                
                  
                  <td className="bg-[#FAFAFA] ">{booth.age}</td>
                  <td className="bg-[#FAFAFA] ">{booth.mobile}</td>
                </tr>
              ))}
            </tbody>
             </table>



             <h3 className="font-mono text-2xl bg-[#FAFAFA] text-green-800 my-5 underline underline-offset-8 p-2">Govt Officials Working in the Locality</h3>
          <table className="table w-full md:w-[80%] border-separate border-spacing-2">
            <thead>
              <tr className="text-green-800 ">
                
              <th className="font-mono text-2xl  border-[2px] ">Post</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Name of the govt employee</th>
            
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Gender</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Age</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px]  border-[2px]">Community</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Mobile</th>
                </tr>
                </thead>
                <tbody>
              {govtOfficials.map((govt, index) => (
                <tr className="text-center" key={index}>
                  
                  <td className="bg-[#FAFAFA]">{govt.designation}</td>
                  <td className="bg-[#FAFAFA]">{govt.worker_Name}</td>
                  <td className="bg-[#FAFAFA] ">{govt.gender}</td>
                  <td className="bg-[#FAFAFA] ">{govt.age}</td>
                  
                  <td className="bg-[#FAFAFA] ">{govt.community}</td>
                  <td className="bg-[#FAFAFA]">{govt.mobile}</td>
                
{/*                   
                  <td className="bg-[#FAFAFA] ">{govt.age}</td>
                  <td className="bg-[#FAFAFA] ">{govt.mobile}</td> */}
                </tr>
              ))}
            </tbody>
             </table>


             <h3 className="font-mono text-2xl bg-[#FAFAFA] text-green-800 my-5 underline underline-offset-8 p-2">Local people working as govt employees outside the locality</h3>
          <table className="table w-full md:w-[80%] border-separate border-spacing-2">
            <thead>
              <tr className="text-green-800 ">
                
              <th className="font-mono text-2xl  border-[2px] ">Post</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Name of the govt employee</th>
            
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Gender</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Age</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px]  border-[2px]">Community</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Mobile</th>
                </tr>
                </thead>
                <tbody>
              {localPeople.map((govt, index) => (
                <tr className="text-center" key={index}>
                  
                  <td className="bg-[#FAFAFA]">{govt.designation}</td>
                  <td className="bg-[#FAFAFA]">{govt.worker_Name}</td>
                  <td className="bg-[#FAFAFA] ">{govt.gender}</td>
                  <td className="bg-[#FAFAFA] ">{govt.age}</td>
                  
                  <td className="bg-[#FAFAFA] ">{govt.community}</td>
                  <td className="bg-[#FAFAFA]">{govt.mobile}</td>
                
{/*                   
                  <td className="bg-[#FAFAFA] ">{govt.age}</td>
                  <td className="bg-[#FAFAFA] ">{govt.mobile}</td> */}
                </tr>
              ))}
            </tbody>
             </table>


             <h3 className="font-mono text-2xl bg-[#FAFAFA] text-green-800 my-5 underline underline-offset-8 p-2">Contact person for additional information</h3>
          <table className="table w-full md:w-[80%] border-separate border-spacing-2">
            <thead>
              <tr className="text-green-800 ">
                
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Name of the Person</th>
            
                <th className="font-mono text-2xl text-green-800 rounded-[10px]  border-[2px]">Community</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Mobile</th>
                </tr>
                </thead>
                <tbody>
              {contactPersons.map((con, index) => (
                <tr className="text-center" key={index}>
                  
                  <td className="bg-[#FAFAFA]">{con.person_Name}</td>
               
                  
                  <td className="bg-[#FAFAFA] ">{con.community}</td>
                  <td className="bg-[#FAFAFA]">{con.mobile}</td>
                
{/*                   
                  <td className="bg-[#FAFAFA] ">{govt.mobile}</td> */}
                </tr>
              ))}
            </tbody>
             </table>


             
             <h3 className="font-mono text-2xl bg-[#FAFAFA] text-green-800 my-5 underline underline-offset-8 p-2">Local Shopkeeper/Businessmen/Treader</h3>
          <table className="table w-full md:w-[80%] border-separate border-spacing-2">
            <thead>
              <tr className="text-green-800 ">
                
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Name of the Person</th>
            
                <th className="font-mono text-2xl text-green-800 rounded-[10px]  border-[2px]">Community</th>
                <th className="font-mono text-2xl text-green-800 rounded-[10px] border-[2px]">Mobile</th>
                </tr>
                </thead>
                <tbody>
              {localShopKeepers.map((con, index) => (
                <tr className="text-center" key={index}>
                  
                  <td className="bg-[#FAFAFA]">{con.person_Name}</td>
               
                  
                  <td className="bg-[#FAFAFA] ">{con.community}</td>
                  <td className="bg-[#FAFAFA]">{con.mobile}</td>
                
{/*                   
                  <td className="bg-[#FAFAFA] ">{govt.mobile}</td> */}
                </tr>
              ))}
            </tbody>
             </table>



             <h3 className="font-mono text-2xl bg-[#FAFAFA] text-green-800 my-5 underline underline-offset-8 p-2">Will your area develop if Union Minister Dharmendra Pradhan is BJP's Lok Sabha candidate?</h3>
             
             <h1> 
             {areaDevelop.area} </h1>
        </div>
        </div>
 

              
      
    );
  };
  
  
  export default StatusDetails;
  