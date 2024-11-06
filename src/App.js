import './App.css';
import Dashboard from './Dashboard';
import Login from './Login'; 
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Vidhan from './Vidhan';
import Menu from './Menu';
import PoliticalDominance from './Vidhan/Surveys/PoliticalDominance';
// import Impactfulpeople from './Vidhan/Surveys/Impactfulpeople';
import PartyCondition from './Vidhan/Surveys/PartyCondition';
import MainDevelopment from './Vidhan/Surveys/MainDevelopment';
import ConditionFacilities from './Vidhan/Surveys/ConditionFacilities';
import DevelopmentNeeds from './Vidhan/Surveys/DevelopmentNeeds';
import LocalGroupsPolitical from './Vidhan/Surveys/LocalGroupsPolitical';
import CommunitiesandImportantPeople from './Vidhan/Surveys/CommunitiesandImportantPeople';
import MainWorker from './Vidhan/Surveys/MainWorker';
import WorkersAnnoyed from './Vidhan/Surveys/WorkersAnnoyed';
import Panchayat from './Vidhan/Surveys/Panchayat';
import { SocialAndPolitical } from './Vidhan/Surveys/SocialAndPolitical';
import { ActiveSocialMedia } from './Vidhan/Surveys/ActiveSocialMedia';
import { BoothAgents } from './Vidhan/Surveys/BoothAgents';
import { GovtOfficials } from './Vidhan/Surveys/GovtOfficials';
import { BoothStrategy } from './Vidhan/Surveys/BoothStrategy';
import { Contact } from './Vidhan/Surveys/Contact';
import { Willyourarea } from './Vidhan/Surveys/Willyourarea';
import { LocalShopKeeper } from './Vidhan/Surveys/LocalShopkeeper';
import { LocalGovtemPeople } from './Vidhan/Surveys/LocalGovtemPeople';
import { Status } from './Status';
import StatusDetails from './Status/Statusdetails';
import Store from './app/Store';
import {Provider}  from 'react-redux';
import SendMessage from './WhatsappWeb/SendMessages';
import MessagesPanel from './WhatsappWeb/MessagesPanel';







const Main=()=>{
  return (<> <Menu/>  <Outlet/> </>)

}




const router = createBrowserRouter([
   
  {
    path: '/',
    element: <Outlet />, // Main entry point
    children: [
      {
        path: '', // Correct child route without leading slash
        element: <Login />
      },
      {
        path: '/User', // Correct child route without leading slash
        element: <Main />,
        children:[
           {path:'/User/dashboard',
           element:<Dashboard/>},
           {
            path:"/User/geopatterns",
            element:<><h1>Geopatterns</h1></>
           },
           {
            path:"/User/status",
            element:<Outlet/>,
            children:[
              {path:'',
                element:<Status/>
              },
              {
                path:'/User/status/details/:id',
                element:<StatusDetails/>
              }
            ]
           },
           {
            path:"/User/pages",
            element:<><Outlet/>  </>,
            children:[
              {
                path:'',
                element:<Vidhan/>
              },
              {

              path:"/User/pages/partydominance",
              element:<PoliticalDominance/>
            },
            {
              path:"/User/pages/impactfulpeople",
              element:<LocalGroupsPolitical/>
            } ,
            {
              path:"/User/pages/PartyCondition",
              element:<PartyCondition/>
            }  
            ,
            {
              path:"/User/pages/MainDevelopment",
              element:<MainDevelopment/>
            },
            {
              path:"/User/pages/Facilities",
              element:<ConditionFacilities/>
            },
            {
              path:"/User/pages/DevelopmentNeeds",
              element:<DevelopmentNeeds/>
            },
            {
              path:"/User/pages/Communities&ImportantPeople",
              element:<CommunitiesandImportantPeople/>  
            },
            {
              path:"/User/pages/MainWorkers",
              element:<MainWorker/>  
            },
            {
              path:"/User/pages/workersAnnoyed",
              element:<WorkersAnnoyed/>  
            },
            {
              path:"/User/pages/panchayatMemebers",
              element:<Panchayat/>  
            },
            {
              path:"/User/pages/social&political",
              element:<SocialAndPolitical/>  
            },{
              path:"/User/pages/active&social",
              element:<ActiveSocialMedia/>  
            },
            {
              path:"/User/pages/booth",
              element:<BoothAgents/>  
            }
            ,{
              path:"/User/pages/govt-officials",
              element:<GovtOfficials/>
            },
            {
              path:"/User/pages/booth-strategy",
              element:<BoothStrategy/>
            },
            {
              path:"/User/pages/contact",
              element:<Contact/>
            },
            {
              path:"/User/pages/local-as-govtemployee",
              element:<LocalGovtemPeople/>
            },
            {
              path:"/User/pages/local-shopkeeper",
              element:<LocalShopKeeper/>
            },
            {
              path:"/User/pages/willyouarea",
              element:<Willyourarea/>
            }
          ]
           },
           {
            path:"/User/geopatterns",
            element:<><h1>Geopatterns</h1></>
           },
           {
            path:"/User/Complaint",
            element:<><MessagesPanel/></>
           },
           {
            path:"/User/logout",
            element:<><h1>Geopatterns</h1></>
           }
        ]
      },
      {
        path: 'vidhansabha', // Correct child route without leading slash
        element: <Vidhan />
      }
    ]
  }
]);

function App() {


  

  return (
      
    <Provider store={Store}>
       <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
