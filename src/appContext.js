import store from "./store";
import mediator from "./mediator";
import { createContext } from 'react';

const { Consumer, Provider } = createContext({
  mediator,
  store
});

export { Provider, Consumer, mediator, store };
