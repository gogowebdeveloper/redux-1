import { createStore } from 'redux';

const initial={counter:0, showCounter: true}
const countReducer = (state = initial, action) => {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1,
        showCounter:state.showCounter
      };
    case 'decrement':
      return {
        counter: state.counter - 1,
        showCounter:state.showCounter
      };
      case "increase":
        return{
            counter:state.counter + action.amount,
            showCounter:state.showCounter

        };
        case "toggle":
            return{
                showCounter: !state.showCounter,
                counter:state.counter
            }
    default:
      return state;
  }
};

const store = createStore(countReducer);

export default store;