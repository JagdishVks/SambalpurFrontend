import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Menu = () => {


  const location=useLocation()

  


  const [isActive, setisActive] = useState(false);


  const handleButtonClick = () => {
    setisActive(!isActive); }

  return (
    <>    
    <div className="md:max-w-[38%] w-full  md:text-md text-sm   mx-auto md:px-14 px-2 py-2 my-2  rounded-[20px] bg-purple-400">  
    <ul className="flex md:space-x-4 space-x-2">
    <li>
      <Link to="/User/dashboard"
        className={` ${location.pathname=="/User/dashboard" ? "text-green-950":"text-[#FFFFFF]"} `}
        
      >
        Dashboard
      </Link>
    </li>
    <li>
      <Link to="/User/geopatterns"
        className={`${location.pathname=="/User/geopatterns" ? "text-green-950":"text-[#FFFFFF]"}`}
      
      >
        GeoPatterns
      </Link>
    </li>
    <li>
      <Link to="/User/status"
      
      className={`${location.pathname=="/User/status" ? "text-green-950":"text-[#FFFFFF]"}`}
        
      >
        Status
      </Link>
    </li>
    <li>
      <Link to="/User/pages"
      className={`${location.pathname=="/User/pages" ? "text-green-950":"text-[#FFFFFF]"}`}
        // onClick={() => handleButtonClick('Pages')
      >
        Pages
      </Link>
    </li>


    <li>
      <button
        className={`hover:text-green-900 ${isActive === 'Logout' ? 'text-green-500' : ''}`}
        onClick={() => handleButtonClick()}
      >
        Logout
      </button>
    </li>
    
  <li>
  <Link to="/User/Complaint"
    className={`${location.pathname=="/User/Complaint" ? "text-green-950":"text-[#FFFFFF]"}`}
    
    >
      Whatsapp web
    </Link>
  </li>
  </ul>
  </div>
  
  </>
  )
}

export default Menu
