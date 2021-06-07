import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

import { counterActions } from "../store/counter-slice";

const Counter = () => {
  //get a slice of state
  //this is automatically reactive to whenever the state change
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  //dispatch actions
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseByHandler = () => {
    dispatch(counterActions.increase(10)); //-> {type: SOME-UNIQUE-ID, payload: 10}  --> the default
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  if (!showCounter) {
    return <button onClick={toggleCounterHandler}>Toggle Counter</button>;
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
