import { createStore, combineReducers } from 'redux';
import authReducer from './reducer/AuthenReducer';
import counterReducer from './reducer/CountersReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);
export default store;

// const initial={counter:0, showCounter: true}
// const countReducer = (state = initial, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         counter: state.counter + 1,
//         showCounter:state.showCounter
//       };
//     case 'decrement':
//       return {
//         counter: state.counter - 1,
//         showCounter:state.showCounter
//       };
//       case "reset":
//       return{
//         counter:state.counter*0,
//         showCounter:state.showCounter
//       };
//       case "increase":
//         return{
//             counter:state.counter + action.amount,
//             showCounter:state.showCounter

//         };
//         case "toggle":
//             return{
//                 showCounter: !state.showCounter,
//                 counter:state.counter
//             }
//     default:
//       return state;
//   }