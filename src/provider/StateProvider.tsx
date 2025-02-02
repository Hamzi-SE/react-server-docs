import React, { createContext, Dispatch, useReducer } from 'react';

type State = {
  menuOpen: boolean;
  animatedBackground: boolean;
  messages: string[];
};
const initialState: State = {
  menuOpen: false,
  animatedBackground: false,
  messages: [],
};

export enum Actions {
  TOGGLE_MENU,
  TOGGLE_ANIMATED_BACKGROUND,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
}

export const stateContext = createContext({
  state: initialState,
  dispatch: (() => {}) as Dispatch<any>,
});

export type Action = { type: Actions; value: any };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case Actions.TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    case Actions.TOGGLE_ANIMATED_BACKGROUND:
      return {
        ...state,
        animatedBackground: !state.animatedBackground,
      };
    case Actions.SHOW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.value],
      };
    case Actions.HIDE_MESSAGE:
      return {
        ...state,
        messages: state.messages.slice(1),
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
