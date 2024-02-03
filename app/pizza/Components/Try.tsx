// import React from 'react'
// import Image from 'next/image';
// import pizza from  './pizza.png';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '@/lib/store';
// import { useAppSelector } from "@/lib/store";
// import { removePepp } from '@/lib/features/pizza-slice';
// import { useEffect } from 'react';
// // import {motion}  from "framer-motion";
// // import { fadeIn } from '../variants';

// interface SliceProps {
//   number: number;
//   onClick: () => void;
//   reset: boolean;
//   setReset: ()=> void;
// }

// const Try: React.FC<SliceProps> = ({ number,onClick,reset,setReset }) => {
//   const angle=(number - 1) * 45;
//   const [PeppSelect, setPeppSelect] = useState(Array(7).fill(false));
//   //const peppCount = useAppSelector((state)=> state.pizzas.peppCount)
//   // const pepp = Array.from({ length: 7}, (_, i) => i + 1);
//   const dispatch = useDispatch<AppDispatch>();
//   const handlePeppClick =( index: number) =>{
//     const  newArr = [...PeppSelect];
//      newArr[index]= !newArr[index] ;
//      setPeppSelect(newArr);
//      dispatch(removePepp())
//   }

//   useEffect(()=>{ 
//     const  newArr = Array(7).fill(false)
//     setPeppSelect(newArr);
//     setReset()
//   } ,[reset])

//   return (
//     // <motion.div variants={fadeIn('left',0.3)} 
//     // initial='hidden'
//     // whileInView={'show'}
//      <div className="absolute w-56 h-56 md:w-96 md:h-96 " style={{transform: `rotate(${angle}deg) translate(0, 50%)`,}}> 
//       <div className='w-60 h-32 ml-16' ></div> 
//       <Image
//         src={pizza}
//         alt="Delicious Pizza" 
//         fill={true}
//         className=' hover:cursor-pointer '
//         onClick={onClick}
//       /> 
//       {
//         PeppSelect.map((peppVal, index) => (
//           peppVal ? null :
//           <div key={index} className={`pep pep-${index+1}`} onClick={()=> handlePeppClick(index)}></div>
//         ))
//       }
//     </div>
//   )
// }

// export default Try

import React from 'react';
import Image from 'next/image';
import pizza from './pizza.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/store';
import { removePepp } from '@/lib/features/pizza-slice';
import { useEffect } from 'react';

interface SliceProps {
  number: number;
  onClick: () => void;
  reset: boolean;
  setReset: () => void;
}

const Try: React.FC<SliceProps> = ({ number, onClick, reset, setReset }) => {
  const angle = (number - 1) * 45;
  const [PeppSelect, setPeppSelect] = useState(Array(7).fill(false));
  const dispatch = useDispatch<AppDispatch>();

  const handlePeppClick = (index: number) => {
    const newArr = [...PeppSelect];
    newArr[index] = !newArr[index];
    setPeppSelect(newArr);
    dispatch(removePepp()); // Pass the index of the clicked pepperoni
  };

  useEffect(() => {
    const newArr = Array(7).fill(false);
    setPeppSelect(newArr);
    setReset();
  }, [reset]);

  return (
    <div className="absolute w-56 h-56 md:w-96 md:h-96 " style={{ transform: `rotate(${angle}deg) translate(0, 50%) `}}>
      <div className='w-60 h-32 ml-16 hover:cursor-pointer' ></div> 
      <Image src={pizza} alt="Delicious Pizza" fill={true} className='hover:cursor-pointer' onClick={onClick} />
      {PeppSelect.map((peppVal, index) => (
        peppVal ? null :
          <div key={index} className={`pep pep-${index + 1}`} onClick={() => handlePeppClick(index)}></div>
      ))}
    </div>
  );
}

export default Try;