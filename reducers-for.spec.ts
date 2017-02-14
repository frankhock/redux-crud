import * as deepFreeze from 'deep-freeze';

import { actionCreatorsFor } from './action-creators-for';
import { reducersFor, initialListState, initialSingleState } from './reducers-for';

const actions = actionCreatorsFor('menu');

fdescribe('reducersFor', () => {

  describe('list reducer', () => {

    
    const reducer = reducersFor('menu');

    describe('LOAD', () => {
      it('sets state.loading to true', () => {
        deepFreeze(initialListState)
        let newState = reducer(initialListState, new actions.LoadAction({}));

        expect(newState.loading).toBe(true);
      });
    });

    describe('LOAD_SUCCESS', () => {
      let menu, newState;

      beforeEach(() => {
        menu = {id: 1, name: 'Main'}
        deepFreeze(menu)
        newState = reducer(initialListState, new actions.LoadSuccessAction([menu]))
      });

      it('sets state.loading to false', () => {
        expect(newState.loading).toBe(false);
      });

      it('sets state.items', () => {
        expect(newState.items).toEqual([menu]);
      });
    });

    describe('LOAD_FAIL', () => {
      let error, newState;

      beforeEach(() => {
        error = {status: 403, message: 'forbidden'}
        deepFreeze(error)
        newState = reducer(initialListState, new actions.LoadFailAction(error))
      });

      it('sets state.loading to false', () => {
        expect(newState.loading).toBe(false);
      });

      it('sets state.items', () => {
        expect(newState.error).toEqual(error);
      });
    });
  });

  describe('single reducer', () => {

    const reducer = reducersFor('menu', {type: 'single'});

    describe('SAVE', () => {
      it('sets state.saving to true', () => {
        deepFreeze(initialSingleState)
        let newState = reducer(initialSingleState, new actions.SaveAction({}));

        expect(newState.saving).toBe(true);
      });
    });

  });
});