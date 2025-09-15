import React from 'react';
import { ImSpinner8 } from "react-icons/im";

const Spinner = () => {
    return (
        <div className='fixed w-full min-h-screen flex items-center justify-center bg-white top-0 left-0 z-999'>
            <ImSpinner8 className='text-[#FF7E3587] text-[52px] md:text-[72px] animate-spin' />
        </div>
    );
};

export default Spinner;