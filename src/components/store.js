import { createStore,combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const counterInitialState={counter:0,showCounter:true}
const authInitialState={isAuthenticated:true}

const counterSlice=createSlice({
  name:"counter",
  initialState:counterInitialState,
  reducers:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    reset(state,action){
      state.counter=state.counter*action.payload
    },
    increase(state,action){
      state.counter=state.counter+action.payload
    },
    toggle(state){
      state.showCounter=!state.showCounter
    }
  }
})

const authSlice=createSlice({
  name:"authentication",
  initialState:authInitialState,
  reducer:{
    login(state){
      state.isAuthenticated=true
    },
    logout(state){
      state.isAuthenticated=false
    },
  }
})
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
// };
export const counterActions=counterSlice.actions;
export const authActions=authSlice.actions;
const rootReducer=combineReducers({
  counter:counterSlice.reducer,
  auth:authSlice.reducer
})

const store = createStore(rootReducer);
export default store;
