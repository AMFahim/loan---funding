import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';


const UiLargeArrowButton = (props) => {
    return (
        <div>
            <button className="flex justify-center bg-primary items-center  text-lg w-[329px] py-2 rounded bg-primary-1 text-white mt-2 text-center font-poppins">  {props.label} <AiOutlineArrowRight className="text-white font-semibold" />  </button>
        </div>
    );
};

export default UiLargeArrowButton;