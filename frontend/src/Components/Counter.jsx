import React, {useState} from 'react'
import { Button } from 'react-bootstrap';

// Icons
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const Counter = () => {

    const [Count, setCount] = useState(0);

      const Increment =() =>{
        setCount(Count + 1);
      }

      const Decrement =() =>{
       if(Count > 0){
        setCount(Count - 1);
       }
      }

  return (
    <div className="btn d-flex justify-content-center align-items-center p-0 border-0">
      <FiMinus className=' p-1 me-2  border border-secondary fs-3' onClick={Decrement} />
      <p className='fs-2 mb-0'>{Count}</p>
      <FaPlus className=' p-1 ms-2 border border-secondary fs-3' onClick={Increment} />
    </div>
  )
}

export default Counter
