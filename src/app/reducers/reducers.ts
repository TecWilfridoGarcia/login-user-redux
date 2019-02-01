import {environment } from '../../environments/environment';
import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer
} from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromAuth from '../auth/reducers/auth.reducer';
import { FormatInputPathObject } from 'path';
import { RouterStateUrl } from '../auth/shared/utils';

export interface State {
        auth: fromAuth.State,
        router:fromRouter.RouterReducerState<RouterStateUrl>;
}
export const reducers: ActionReducerMap<State | any> = {
  auth: fromAuth.AuthReducer,
  router: fromRouter.routerReducer
}
export function logger(reducer:ActionReducer<State>): ActionReducer<State> {
  return function(state:State, action:any):State{
    console.log('state',state);
    console.log('action',action);
    return reducer(state, action);

  }

}
export const metaReducers: MetaReducer<State>[] = !environment.production
? [logger,storeFreeze]
:[];
export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getAuth = createSelector(
  getAuthState,
  fromAuth.getAuthState
)


// return reducer(state, action);
