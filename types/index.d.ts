import { Action, Dispatch } from 'redux';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

declare module 'react-redux' {
  export function useDispatch<TDispatch = Dispatch<any>>(): TDispatch;
  export function useDispatch<A extends Action = AnyAction>(): Dispatch<A>;

  export function useSelector<TState, TSelected>(
    selector: (state: TState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected;
}
