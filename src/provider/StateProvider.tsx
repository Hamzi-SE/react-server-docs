import React, { createContext, useReducer } from 'react';

type State = {
  menuOpen: boolean;
};
const initialState: State = {
  menuOpen: false,
};

export const stateContext = createContext({
  state: initialState,
  dispatch: (state, action) => {},
});

export type Action = { type: string; value: any };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
  }
  return state;
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      {children}
    </stateContext.Provider>
  );
};
