import { Action } from '@ngrx/store';

import { DefaultActions } from './constants';
import { actionTypesFor } from './action-types-for';
import { MbError } from '../mb-error';


export const actionCreatorsFor = (resourceName:string) => {
  if (!resourceName) {
    throw new Error('expected resourceName');
  }

  const actionTypes = actionTypesFor(resourceName);

  class LoadAction implements Action {
    type = actionTypes.load;
    constructor(public payload: any) {}
  }

  class LoadSuccessAction implements Action {
    type = actionTypes.loadSuccess;
    constructor(public payload: Array<any>) {}
  }

  class LoadFailAction implements Action {
    type = actionTypes.loadFail;
    constructor(public payload: MbError) {}
  }

  class GetAction implements Action {
    type = actionTypes.get;
    constructor(public payload: number) {}
  }

  class GetSuccessAction implements Action {
    type = actionTypes.getSuccess;
    constructor(public payload: any) {}
  }

  class GetFailAction implements Action {
    type = actionTypes.getFail;
    constructor(public payload: MbError) {}
  }

  class SaveAction implements Action {
    type = actionTypes.save;
    constructor(public payload: any) {}
  }

  class SaveSuccessAction implements Action {
    type = actionTypes.saveSuccess;
    constructor(public payload: any) {}
  }

  class SaveFailAction implements Action {
    type = actionTypes.saveFail;
    constructor(public payload: MbError) {}
  }

  class UpdateAction implements Action {
    type = actionTypes.update;
    constructor(public payload: any) {}
  }

  class UpdateSuccessAction implements Action {
    type = actionTypes.updateSuccess;
    constructor(public payload: any) {}
  }

  class UpdateFailAction implements Action {
    type = actionTypes.updateFail;
    constructor(public payload: MbError) {}
  }

  class DeleteAction implements Action {
    type = actionTypes.delete;
    constructor(public payload: any) {}
  }

  class DeleteSuccessAction implements Action {
    type = actionTypes.deleteSuccess;
    constructor(public payload: any) {}
  }

  class DeleteFailAction implements Action {
    type = actionTypes.deleteFail;
    constructor(public payload: MbError) {}
  }

  class OpenEditModalAction implements Action {
    type = actionTypes.openEditModal;
    constructor() {}
  }

  class CloseEditModalAction implements Action {
    type = actionTypes.closeEditModal;
    constructor() {}
  }

  class ResetAction implements Action {
    type = actionTypes.reset;
    constructor() {}
  }

  return {
    LoadAction,
    LoadSuccessAction,
    LoadFailAction,
    GetAction,
    GetSuccessAction,
    GetFailAction,
    SaveAction,
    SaveSuccessAction,
    SaveFailAction,
    UpdateAction,
    UpdateSuccessAction,
    UpdateFailAction,
    DeleteAction,
    DeleteSuccessAction,
    DeleteFailAction,
    OpenEditModalAction,
    CloseEditModalAction,
    ResetAction
  }

}
