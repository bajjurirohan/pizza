import React, { useEffect, useState } from 'react'
import Slice from './Slice'
import Try from './Try';
import { motion } from "framer-motion";
//++import { fadeIn } from "../variants";
import Cart from './Cart';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/store';
import { removePizza, resetPizza } from '@/lib/features/pizza-slice';

const Pizza: React.FC = () => {

    const slices = Array.from({ length: 8}, (_, i) => i + 1);
    const [SliceSelect, setSliceSelect] = useState(Array(8).fill(false));
    const [resetPepp, setresetPepp] = useState(false)
    const dispatch = useDispatch<AppDispatch>();

    const handleSliceClick =( index: number) =>{
      const  newArr = [...SliceSelect];
       newArr[index - 1]= !newArr[index-1] ;
       setSliceSelect(newArr);
       dispatch(removePizza())
    }

  
    const handleReset =() =>{
     
      const  newArr = Array(8).fill(false)
       setSliceSelect(newArr);
       dispatch(resetPizza())
       setresetPepp(true)
    }


  return (
    <div className="flex flex-col gap-y-36 md:flex-row  justify-between md:justify-center items-center w-full h-full">
    <div 
      className="w-[200px] h-[200px] md:w-[600px] md:h-[600px]">
      {
            slices.map(sliceNumber => (
            SliceSelect[sliceNumber-1] ? null : (
            // <Slice key={sliceNumber} number={sliceNumber} 
            //  onClick={() => handleSliceClick(sliceNumber)} />)
            // {/* <Slice key={2} number={2} /> */}
            
            <Try key={sliceNumber} number={sliceNumber}
             onClick={() => handleSliceClick(sliceNumber)}
             reset={resetPepp} 
             setReset={()=>setresetPepp(false)}/> )
              
            ))
    }
    </div>
    <div className='flex md:flex-col justify-center gap-x-10 mb-10 items-center '>
    <button className=' bg-transparent md:w-36 md:h-10 text-blue-700 font-semibold py-2 px-4 border md:mb-56 border-blue-500 rounded' onClick={handleReset}>ClickME</button>
    <Cart/>
    </div>
  </div>
  )
}

export default Pizza



