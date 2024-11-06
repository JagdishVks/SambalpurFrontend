import React from 'react'
import Card from './Card';


const VidhanDetails=[
    {title:"Which community or social groups dominates the political equations in the area? (ଏହିଅଞ୍ଚ଱ଯ ଯାଜକନୈତିକ ସଭୀକଯଣକଯ କକଉଁସମ୍ପ୍ରଦାୟ ଫା ସାଭାଜିକ କଗାଷ୍ଠୀଯ ଆଧି଩ତୟ ଯହିଛି?)",
        link:"/User/pages/partydominance"
    },
    {title:"Important local groups and political people who impact the election in the area? (ଏହିଅଞ୍ଚ଱କଯ ନଫିବାଚନକୁପ୍ରବାଫିତ କଯୁଥିଫା ଗୁଯୁତ୍ୱ଩ର୍ଣ୍ୂ ବସ୍ଥାନୀୟ କଗାଷ୍ଠୀ ଏଫଂ ଯାଜକନୈତିକ କରାକ?)",
     link:"/User/pages/impactfulpeople"
    },
{
    title:"Condition of political party organization in the area? (ଅଞ୍ଚ଱କଯ ଯାଜକନୈତିକ ଦ଱ଯ ସଂଗଠନଯ ସ୍ଥିତି)",
    link:"/User/pages/PartyCondition"
},
{
    title:"Main development work carried out by MLA/MP in the area? (ଏହିଅଞ୍ଚ଱କଯ ଫିଧାୟକ/ସାଂସଦଙ୍କ ଦ୍ୱାଯା କହାଇଥିଫା ଭୁଖ୍ୟ ଉନ୍ନୟନ ଭୂ଱କ କାମବୟ?)",
    link:"/User/pages/MainDevelopment"
},
{
    title:"Condition of Facilities (ସୁଫଧିାଗୁଡକିଯ ଅଫସ୍ଥା)",
    link:"/User/pages/Facilities"
},
{
    title:"Main Developmental Needs of the people of the area? (ଅଞ୍ଚ଱ଫାସୀଙ୍କ ଭୁଖ୍ୟ ଉନ୍ନୟନଭୂ଱କ ଆଫଶୟକତା?)",
    link:"/User/pages/DevelopmentNeeds"
},
{
    title:"Communities and Important People? (ସମ୍ପ୍ରଦାୟ ଏଫଂ ଗୁଯୁତ୍ୱ଩ୂର୍ଣ୍ବକରାକଭାକନ)",
    link:"/User/pages/Communities&ImportantPeople"
},
{
    title:"Main workers of all political parties (ସଫୁଯାଜକନୈତିକ ଦ଱ଯ ଭୁଖ୍ୟ କଭବକର୍ତ୍ବା)",
    link:"/User/pages/MainWorkers"
},
{   
    title:"Workers Annoyed with their Parties (ନିଜ ଦ଱ ପ୍ରତିଅସନ୍ତୁ ଷ୍ଟ ଥିଫା କଭବକର୍ତ୍ବା)",
    link:"/User/pages/workersAnnoyed"
},
{
    title:"Panchayat members, Ward members, Other elected persons and Important Local People ଩ଞ୍ଚାୟତ ସବୟ, ୱାର୍ବସବୟ, ଅନୟ ନିଫବାଚିତ ଫୟକ୍ତିଓ ଗୁଯୁତ୍ୱ଩ୂର୍ଣ୍ବସ୍ଥାନୀୟ ଫୟକ୍ତି)",
    link:"/User/pages/panchayatMemebers"
},
{
    title:"Social and political organisations active in the area (ଏହିଅଞ୍ଚ଱କଯ ସକ୍ରିୟ ଥିଫା ସାଭାଜିକ ଓ ଯାଜକନୈତିକ ସଂଗଠନ)",
    link:"/User/pages/social&political"
},
{title:"People active on Social Media (କସାସିଆର ଭିର୍ିଆକଯ ସକ୍ରିୟ ଫୟକ୍ତି)",
    link:"/User/pages/active&social"
},
{
    title:"Booth Agents in the last election (ଗତ ନିଫବାଚନକଯ ଥିଫା ଫୁଥ୍ ଏକଜଣ୍ଟ)",
    link:"/User/pages/booth"
},
{
    title:"Govt Officials Working in the Locality (ସ୍ଥାନୀୟ ଅଞ୍ଚ଱କଯ କାମବୟଯତ ସଯକାଯୀ ଅଧିକାଯୀ)",
    link:"/User/pages/govt-officials"
},
{
    title:"Local people working as govt employees outside the locality (ସ୍ଥାନୀୟ ଅଞ୍ଚ଱ ଫାହାକଯ ସଯକାଯୀ କଭବଚାଯୀ ବାକଫ କାଭ କଯୁଥିଫା ସ୍ଥାନୀୟ କରାକକ)",
    link:"/User/pages/local-as-govtemployee"
},
{
    title:"Suggested Locality/ Booth strategy(ପ୍ରସ୍ତାଫିତ ଅଞ୍ଚ଱/ ଫୁଥ୍ ଯଣନୀତି)",
    link:"/User/pages/booth-strategy"
},
{
    title:"Contact person for additional information (ଅତିଯିକ୍ତ ସୂଚନା ଩ାଇଁଫୟକ୍ତିଙ୍କ ସହ କମାଗାକମାଗ କଯନ୍ତୁ)",
    link:"/User/pages/contact"
},
{
    title:"Local Shopkeeper/Businessmen/ Treader (ସ୍ଥାନୀୟ ଦୋକାନୀ / ବ୍ୟବସାୟୀ / ଟ୍ରେଡର୍ |",
    link:"/User/pages/local-shopkeeper"
},
{
    title:"Will your area develop if Union Minister Dharmendra Pradhan is BJP's Lok Sabha candidate? ଯଦି କେନ୍ଦ୍ର ମନ୍ତ୍ରୀ ଧର୍ମେନ୍ଦ୍ର ପ୍ରଧାନ",
    link:"/User/pages/willyouarea"
}]

const Vidhan = () => {
  return (
   <>
   <div className=" flex ">
    <div className="lg:w-[15%] hidden"></div>
    <div className="w-full  flex flex-col   ">
    <div className="flex md:gap-y-0 gap-y-5  md:mx-0 mx-2 flex-col md:flex-row  justify-center md:justify-around">
    <Card   title="BLOCK NAME (ବ୍ଲକ୍ ନାମ)  GRAM PANCHAYAT (ଗ୍ରାମ ପଞ୍ଚାୟତ)" link=""/>
    <Card   title="Type of Area? (ଅଞ୍ଚ଱ଯ ପ୍ରକାଯ?)"  link=""/>
    <Card title="Which party appears stronger in the area? (ଏହିଅଞ୍ଚ଱କଯ କକଉଁଦ଱ ଅଧିକ ଶକ୍ତିଶା଱ୀ ଜଣା଩ଡୁଛ?ି)"  link=""/>
    </div>

    <div className=" w-full  flex container mx-auto mt-5 flex-wrap md:flex-row md:gap-x-[15%]  gap-y-10 ">
        
      {VidhanDetails.map((i)=>{return (<><Card title={i.title} link={i.link}/>  </>)})}
      



    </div>
  


  </div>
  </div>
   
   </>
  )
}

export default Vidhan;
