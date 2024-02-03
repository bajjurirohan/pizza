import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
interface SliceProps {
    number: number;
    onClick: () => void;
    reset: boolean;
  }

  const Slice: React.FC<SliceProps> = ({ number , onClick, reset}) => {
    const angle=(number - 1) * 45;

    return (
    <motion.div variants={fadeIn('left',0.3)} 
    initial='hidden'
    whileInView={'show'}
    >
        <div className="slice relative mt-[25px] hover:cursor-pointer"  style={{transform: `rotate(${angle}deg)`}}>
          <div className="crust "></div>
          <div className="cheese " onClick={onClick}></div>
          <div className="pep pep-one fall-1"></div>
          <div className="pep pep-two fall-2"></div>
          <div className="pep pep-three fall-3"></div>
          <div className="pep pep-four fall-4"></div>
          <div className="pep pep-five fall-5"></div>
          <div className="pep pep-six fall-6"></div>
        </div>
     </motion.div>
  )
}

export default Slice