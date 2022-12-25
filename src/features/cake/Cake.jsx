import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./cakeSlice";

export default function Cake() {
  const cakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  return (
    <>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{cakes}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </>
  );
}
