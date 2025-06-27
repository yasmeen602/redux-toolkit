import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { 
  increment, 
  decrement, 
  incrementByAmount,

} from "../features/counterSlice";


const Counter = () => {
  const counter = useSelector((state) => state.counter.value);


  const dispatch = useDispatch();

  const [IncrementAmount, setIncrementAmount] = useState(0);

  const handleInputChange = (e) => {
    setIncrementAmount(Number(e.target.value));
  }

  
const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(IncrementAmount));
    setIncrementAmount(0);
}

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold ">Counter: {counter}</h1>
      <div className="flex space-x-4">
        <button onClick={() => dispatch(increment())} 
        className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-700">Increment</button>
        <button onClick={() => dispatch(decrement())}
        className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-700">Decrement</button>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <input 
        type="number" 
        className="border rounded p-2" 
        value={IncrementAmount}
        onChange={handleInputChange}
        />
        <button 
        onClick={handleIncrementByAmount}
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">Increment By Amount</button>
      </div>
    </div>
  );
};

export default Counter;
