import {
  ActionReducerMap
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as movies from './movies.reducer';

export interface State {
  moviesState: movies.State
}

export const reducers: ActionReducerMap<State> = {
  moviesState: movies.reducer
}
