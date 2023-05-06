import { useEffect } from 'react';
import { useState } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

const useStore = () => {
  const [, setState] = useState(globalState);

  const dispatch = actionIdentifier => {
    const action = actions[actionIdentifier];

    const newState = action(globalState);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter(listener => listener !== setState);
    };
  }, []);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
    actions = { ...actions, userActions };
  }
};

export default useStore;
