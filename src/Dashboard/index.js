import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import Menu from '../Menu';


const Dashboard = () => {

  var locations = [
    // Example data
    ['Location 1', 12.9715987, 77.594566, 'LOC_1', 'AC_1', '1'],
    ['Location 2', 13.0826802, 80.2707184, 'LOC_2', 'AC_2', '0']
  ];

  
  const { register, handleSubmit } = useForm();


  // Submit handler for the form
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Handle form submission logic here
  };


  return (
    <>
    <div className="relative ">
      
{/* 
<ul className="flex  space-x-4">
  <li>
    <button
      className={`hover:text-green-900 ${isActive === 'Dashboard' ? 'text-green-500' : ''}`}
      onClick={() => handleButtonClick('Dashboard')}
    >
      Dashboard
    </button>
  </li>
  <li>
    <button
      className={`hover:text-green-900 ${isActive === 'GeoPatterns' ? 'text-green-500' : ''}`}
      onClick={() => handleButtonClick('GeoPatterns')}
    >
      GeoPatterns
    </button>
  </li>
  <li>
    <button
      className={`hover:text-green-900 ${isActive === 'Status' ? 'text-green-500' : ''}`}
      onClick={() => handleButtonClick('Status')}
    >
      Status
    </button>
  </li>
  <li>
    <button
      className={`hover:text-green-900 ${isActive === 'Pages' ? 'text-green-500' : ''}`}
      onClick={() => handleButtonClick('Pages')}
    >
      Pages
    </button>
  </li>
  <li>
    <button
      className={`hover:text-green-900 ${isActive === 'Logout' ? 'text-green-500' : ''}`}
      onClick={() => handleButtonClick('Logout')}
    >
      Logout
    </button>
  </li>
</ul> */}
{/* <Menu/> */}
{/* </div> */}
      

    <iframe width="100%" height="800" frameborder="0" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Odisha%20Balasore+(India)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.acadoo.de/leistungen/ghostwriter-doktorarbeit/ghostwriter-dissertation-in-medizin/'>Medizin Doktorarbeit</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=95a54fdbe010ec89fd27f4ad942516df664a3d53'></script>
    <div className="container absolute mx-auto lg:w-[50%] w-full bg-[rgba(255,255,255,0.8)] lg:top-16 top-2 right-0 lg:right-32 p-4">
      <form onSubmit={handleSubmit(onSubmit)} name="locality">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <select
              {...register('State_Name', { required: true })}
              className="form-control w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select State</option>
              <option value="Odisha">Odisha</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <select
              {...register('PC_Name', { required: true })}
              className="form-control w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Lok Sabha</option>
              {/* Add options for Lok Sabha */}
            </select>
          </div>
          <div>
            <select
              {...register('AC_Name', { required: true })}
              className="form-control w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Vidhan Sabha</option>
              {/* Add options for Vidhan Sabha */}
            </select>
          </div>
          <div>
            <select
              {...register('LOC_ID', { required: true })}
              className="form-control w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Locality</option>
              {/* Add options for Locality */}
            </select>
          </div>
</div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
          <div>
            <a href="#completed">
              <div className="bg-green-500 p-2 rounded-lg shadow">
                <h5 className="text-white text-center">Completed Location (2646)</h5>
              </div>
            </a>
          </div>
          <div>
            <a href="#completed">
              <div className="bg-red-500 p-2 rounded-lg shadow">
                <h5 className="text-white text-center">Pending Location (65)</h5>
              </div>
            </a>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
        >
          Submit
        </button>
      </form>
      
    {/* <div className="absolute font-semibold bg-white rounded-[12px] left-[-32%] p-5"> */}

    {/* <ul className="flex flex-col space-y-2">
      <li>
        <button
          className={`hover:text-green-900 ${isActive === 'Dashboard' ? 'text-green-500' : ''}`}
          onClick={() => handleButtonClick('Dashboard')}
        >
          Dashboard
        </button>
      </li>
      <li>
        <button
          className={`hover:text-green-900 ${isActive === 'GeoPatterns' ? 'text-green-500' : ''}`}
          onClick={() => handleButtonClick('GeoPatterns')}
        >
          GeoPatterns
        </button>
      </li>
      <li>
        <button
          className={`hover:text-green-900 ${isActive === 'Status' ? 'text-green-500' : ''}`}
          onClick={() => handleButtonClick('Status')}
        >
          Status
        </button>
      </li>
      <li>
        <button
          className={`hover:text-green-900 ${isActive === 'Pages' ? 'text-green-500' : ''}`}
          onClick={() => handleButtonClick('Pages')}
        >
          Pages
        </button>
      </li>
      <li>
        <button
          className={`hover:text-green-900 ${isActive === 'Logout' ? 'text-green-500' : ''}`}
          onClick={() => handleButtonClick('Logout')}
        >
          Logout
        </button>
      </li>
    </ul> */}



{/* </div> */}
    </div>
    

  </div>


    </>
  )
}

export default Dashboard;
