import { DefaultActions } from './constants';
import { forOwn, tap, capitalize, forEach } from 'lodash';


export const actionTypesFor = (resourceName:string) => {
  if (!resourceName) { throw new Error('argument resourceName is required') }

  const resource = capitalize(resourceName);
  let resourceConst = resource.toUpperCase();

  return tap({}, (actionTypes) => {
    forOwn(DefaultActions, (value, key) => {
      actionTypes[`${resourceConst}_${key}`] = `[${resource}] ${value}`
    });

    forEach(['load', 'get', 'save', 'update', 'delete'], (action) => {

      let upperAction = action.toUpperCase();
      let baseAction = DefaultActions[upperAction];

      actionTypes[action] = `[${resource}] ${baseAction}`;
      actionTypes[`${action}Success`] = `[${resource}] ${baseAction} Success`;
      actionTypes[`${action}Fail`] = `[${resource}] ${baseAction} Fail`;
    });

    actionTypes.openEditModal = `[${resource}] ${DefaultActions.OPEN_EDIT_MODAL}`
    actionTypes.closeEditModal = `[${resource}] ${DefaultActions.CLOSE_EDIT_MODAL}`
    actionTypes.reset = `[${resource}] ${DefaultActions.RESET}`

  });
}
