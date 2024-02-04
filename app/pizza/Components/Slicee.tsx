

import React, { useRef } from 'react';
import { MouseEvent } from 'react';
import Image from 'next/image';
import pizza from './pizza.png';
import unnamed from './unnamed.png'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/store';
import { addPepp, removePepp } from '@/lib/features/pizza-slice';
import { useEffect } from 'react';


interface SliceProps {
  number: number;
  onClick: () => void;
  reset: boolean;
  setReset: () => void;
}

const Try: React.FC<SliceProps> = ({ number, onClick, reset, setReset }) => {
  const imgRef = useRef<HTMLInputElement>(null);
  const angle = (number - 1) * 45;
  const [PeppSelect, setPeppSelect] = useState(Array(7).fill(false));
  
  const dispatch = useDispatch<AppDispatch>();
  const [scaleval, setScale]= useState(1)

  const sliceStyle: React.CSSProperties = {
    transition: 'all 0.3s ease-out', 
    transform: `scale(${scaleval})`,
  };

  const handlePeppClick = (index: number) => {
    const newArr = [...PeppSelect];
    newArr[index] = !newArr[index];
    setPeppSelect(newArr);
    dispatch(removePepp()); 
  };

  const handleMouseEnter = () => {
    setScale(1.2)
  };

  const handleMouseLeave =() =>{
    setScale(1)
  }

  useEffect(() => {
    const newArr = Array(7).fill(false);
    setPeppSelect(newArr);
    setReset();
  }, [reset]);

  const handleRightClick = (event: React.MouseEvent) =>{
    if (event.type === 'click') {
      console.log('Left click');
    } else if (event.type === 'contextmenu') {
      console.log('Right click');
    }
    console.log('clicked')
    event.preventDefault();
    
    const addPeppIndex = PeppSelect.findIndex((peppVal) => peppVal==true);
    if (addPeppIndex !== -1) {
      const newArr=[...PeppSelect];
      newArr[addPeppIndex] = false;
      setPeppSelect(newArr);
      dispatch(addPepp())
  }
}

  return (

    <div className="absolute w-36 h-48 md:w-64 md:h-96 z-0 " style={{ transform: `rotate(${angle}deg) translate(0, 50%) `}}>
      <Image src={pizza} alt="Delicious Pizza" style={sliceStyle} className=' z-10' fill={true} useMap={`#crust${number}`} />
    
    <map name= {`crust${number}`}>
      <area shape="rect" coords="64,300,320,370" className='hover:cursor-pointer' onClick={onClick}  >
     </area>
     <area shape="poly" coords="120,0,181,16,204,160,204,222,191,270,140,329,85,355,58,352,37,322,40,259,13,161,28,147" className='' onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave} onClick={handleRightClick} onContextMenu={handleRightClick} >
     </area>
     </map>
      {PeppSelect.map((peppVal, index) => (
        peppVal ? null :
          <div key={index} className={`pep pep-${index + 1} z-20`} onClick={() => handlePeppClick(index)}></div>
      ))}
    </div>
  );
}

export default Try;