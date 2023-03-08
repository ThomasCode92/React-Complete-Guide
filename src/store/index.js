import { legacy_createStore as createStore } from 'redux';

const INITIAL_STATE = { counter: 0, showCounter: true };

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case 'DECREMENT': {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case 'INCREASE': {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case 'TOGGLE': {
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(counterReducer);

export default store;
