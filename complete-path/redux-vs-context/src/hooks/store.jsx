import { useEffect } from 'react';
import { useState } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

const useStore = (shouldListen = true) => {
  const [, setState] = useState(globalState);

  const dispatch = (actionIdentifier, payload) => {
    const action = actions[actionIdentifier];

    const newState = action(globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter(listener => listener !== setState);
      }
    };
  }, [shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
    actions = { ...actions, ...userActions };
  }
};

export default useStore;
