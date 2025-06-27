import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function CounterButtons() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())}> +1 </button>
      <button onClick={() => dispatch(decrement())}> –1 </button>
      <button onClick={() => dispatch(incrementByAmount(5))}> +5 </button>
    </>
  );
}

export default CounterButtons;
