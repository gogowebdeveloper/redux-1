import classes from './Counter.module.css';
import { useDispatch, useSelector} from 'react-redux';
import hideEye from "../assets/svg/Group.svg"

const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector((state) => state.counter);
  const show=useSelector((state)=>state.showCounter)

  const updateIncrement=()=>{
    dispatch({type:"increment"})
  }
  const updateDecrement=()=>{
    dispatch({type:"decrement"})
  }

  const handleUpdate=()=>{
    dispatch({type:'increase',amount: 5})
  }
  const toggleCounterHandler = () => {
    dispatch({type:"toggle"})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show ? <div className={classes.value}>{counter}</div> : <img className={classes.show} src={hideEye} alt='hidden'/>}
      <div>
      <button onClick={updateIncrement}>increment</button>
      <button onClick={handleUpdate}>increment + 5</button>
      <button onClick={updateDecrement}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
