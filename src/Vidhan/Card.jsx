import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, link }) => {

    const navigate = useNavigate(); 

    const handleClick = () => {
      navigate(link, { state: { title }}); 
    };
  return (
    <div className="md:w-[40%]  w-[90%]  border-solid border-2  text-green-900  shadow-sm hover:text-green-500 rounded-md hover:border-green-600 text-center p-2  mx-2 "
    onClick={handleClick}>
      <div className="polt_icon_bx">
        <div className="icon_bx">
          
        </div>
        <div className="icon_title">
          <h5>
            <h1 className=" font-semibold   hover:underline">
              {title}
            </h1>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
