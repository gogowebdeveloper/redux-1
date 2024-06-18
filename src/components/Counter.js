import classes from './Counter.module.css';
import { useDispatch, useSelector} from 'react-redux';
import hideEye from "../assets/svg/Group.svg"
import { counterActions } from './store';

const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show=useSelector((state)=>state.counter.showCounter);

  const updateIncrement=()=>{
    dispatch(counterActions.increment())
  }
  const updateDecrement=()=>{
    dispatch(counterActions.decrement())
  }
  const updateReset=()=>{
    dispatch(counterActions.reset(0))  
  }
  const handleUpdate=()=>{
    dispatch(counterActions.increase(5))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show ? <div className={classes.value}>{counter}</div> : <img className={classes.show} src={hideEye} alt='hidden'/>}
      <div>
      <button onClick={updateIncrement}>increment</button>
      <button onClick={handleUpdate}>increment + 5</button>
      <button onClick={updateDecrement}>decrement</button>
      <button onClick={updateReset}>reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
