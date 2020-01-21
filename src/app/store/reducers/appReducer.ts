import { ACTION_LOGOUT, ACTION_LOGIN } from '../actions/appActions';

// tslint:disable-next-line: class-name
export interface appReducerState {
  login: boolean;
  user?: string;
}

const initialState: appReducerState = {
  login: false,
  user: ''
};

export function reducer(state = initialState, action): appReducerState {
  switch (action.type) {
    case ACTION_LOGOUT:
    return {
        ...state,
        login: false,
        user: action.payload
      };
    case ACTION_LOGIN:
    return {
        ...state,
        login: true,
        user: action.payload
      };
    }
  return state;
}
