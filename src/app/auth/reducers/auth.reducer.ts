import * as AuthActions from '../actions/auth.action';
import {  AuthActionTypes } from  '../actions/auth.action';

export interface State {
  user: Array<any>;
  tokens: Array<any>;
  error: string;
  isLoading: boolean;

}

const initialState: State={
  user: [],
  tokens:[],
  error:'',
  isLoading: false
}
export function AuthReducer(state =[], action:AuthActions.actions){
  switch(action.type){
    case AuthActionTypes.LoginUser:
      return action;
      break;
    case AuthActionTypes.LoggedUser:
      return {
        ...state,
        isLoading: false,
        tokens: action.payload
      };
    default:
      return state;

  }

}
export const getAuthState = (state:State) => state.user;
export const getAuthAction = (action:any) => action.payload;
export const getAuthError= (state:State) => state.error;
