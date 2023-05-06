import { useEffect } from 'react';
import { useState } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

const useStore = () => {
  const [, setState] = useState(globalState);

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter(listener => listener !== setState);
    };
  }, []);
};

export default useStore;
