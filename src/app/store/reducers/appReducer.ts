import { ACTION_LOGOUT, ACTION_LOGIN } from '../actions/appActions';

// tslint:disable-next-line: class-name
export interface appReducerState {
  login: boolean;
  user?: string;
}

const initialState: appReducerState = {
  login: true,
  user: 'mehul'
};

export function reducer(state = initialState, action): appReducerState {
  switch (action.tpe) {
    case ACTION_LOGOUT:
      return {
        ...state,
        login: false
      };
    case ACTION_LOGIN:
      return {
        ...state,
        login: false
      };
  }
  return state;
}
