import { combineReducers } from 'redux';
import * as Todos from './todos';

export interface RootState {
  todos: Todos.State;
}

export const rootReducer = combineReducers({
  todos: Todos.reducer,
});

export const actionCreator = {
  todos: Todos.actionCreator,
};
