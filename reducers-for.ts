import * as dotProp from 'dot-prop-immutable';

import { actionTypesFor } from './action-types-for';


export const initialListState = {
  loading: false,
  items: [],
  error: null
}

export const initialSingleState = {
  loading: false,
  saving: false,
  item: null,
  editModal: {
    isOpen: false,
    error: null
  }
}

export const reducersFor = (resourceName: string, args = {}, emptyState = {}) => {
  if (!resourceName) { throw new Error('resourceName expected') }
  let config = Object.assign({type: 'list'}, args);

  if (config.type === 'single') {

    let initialState = Object.assign({}, initialSingleState, emptyState);

    return function reducer(state, action) {
      state = state || initialState;

      let actionTypes = actionTypesFor(resourceName);

      switch (action.type) {

        case actionTypes.get: {
          return dotProp.set(state, 'loading', true);
        }

        case actionTypes.getSuccess: {
          let newState;
          newState = dotProp.set(state, 'loading', false);
          return dotProp.set(newState, 'item', action.payload);
        }

        case actionTypes.save: {
          return dotProp.set(state, 'saving', true);
        }

        default: {
          return state;
        }
      }
    }

  } else {

    let initialState = Object.assign({}, initialListState, emptyState);

    return function reducer(state = initialState, action) {

      let actionTypes = actionTypesFor(resourceName);

      switch (action.type) {

        case actionTypes.load: {
          return dotProp.set(state, 'loading', true);
        }

        case actionTypes.loadSuccess: {
          let newState;
          newState = dotProp.set(state, 'loading', false);
          return dotProp.set(newState, 'items', action.payload);
        }

        case actionTypes.loadFail: {
          let newState;
          newState = dotProp.set(state, 'loading', false);
          return dotProp.set(newState, 'error', action.payload);
        }

        default: {
          return state;
        }
      }
    }
  }
}