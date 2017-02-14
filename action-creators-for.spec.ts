import { actionCreatorsFor } from './action-creators-for';

fdescribe('actionCreatorsFor', () => {
  let actionCreators = actionCreatorsFor('menu');


  it('returns actions', () => {

    expect(actionCreators.LoadAction).toBeTruthy();
    expect(actionCreators.LoadSuccessAction).toBeTruthy();
    expect(actionCreators.LoadFailAction).toBeTruthy();

    expect(actionCreators.GetAction).toBeTruthy();
    expect(actionCreators.GetSuccessAction).toBeTruthy();
    expect(actionCreators.GetFailAction).toBeTruthy();

    expect(actionCreators.SaveAction).toBeTruthy();
    expect(actionCreators.SaveSuccessAction).toBeTruthy();
    expect(actionCreators.SaveFailAction).toBeTruthy();

    expect(actionCreators.UpdateAction).toBeTruthy();
    expect(actionCreators.UpdateSuccessAction).toBeTruthy();
    expect(actionCreators.UpdateFailAction).toBeTruthy();

    expect(actionCreators.DeleteAction).toBeTruthy();
    expect(actionCreators.DeleteSuccessAction).toBeTruthy();
    expect(actionCreators.DeleteFailAction).toBeTruthy();

    expect(actionCreators.OpenEditModalAction).toBeTruthy();
    expect(actionCreators.CloseEditModalAction).toBeTruthy();
    expect(actionCreators.ResetAction).toBeTruthy();
  });

  describe('LoadAction', () => {
    it('returns action', () => {
      let payload = {id: 1};
      let action = new actionCreators.LoadAction(payload);

      expect(action.type).toBe('[Menu] Load');
      expect(action.payload).toEqual(payload);
    });
  });

  describe('LoadSuccessAction', () => {
    it('returns action', () => {
      let payload = [{id: 1}];
      let action = new actionCreators.LoadSuccessAction(payload);

      expect(action.type).toBe('[Menu] Load Success');
      expect(action.payload).toEqual(payload);
    });
  });

  describe('LoadFailAction', () => {
    it('returns action', () => {
      let error = {status: 422, message: 'unprocessible.'};
      let action = new actionCreators.LoadFailAction(error);

      expect(action.type).toBe('[Menu] Load Fail');
      expect(action.payload).toEqual(error);
    });
  });

  describe('GetAction', () => {
    it('returns action', () => {
      let payload = 1;
      let action = new actionCreators.GetAction(payload);

      expect(action.type).toBe('[Menu] Get');
      expect(action.payload).toEqual(payload);
    });
  });

  describe('GetSuccessAction', () => {
    it('returns action', () => {
      let payload = {id: 1};
      let action = new actionCreators.GetSuccessAction(payload);

      expect(action.type).toBe('[Menu] Get Success');
      expect(action.payload).toEqual(payload);
    });
  });

  describe('GetFailAction', () => {
    it('returns action', () => {
      let error = {status: 422, message: 'unprocessible.'};
      let action = new actionCreators.GetFailAction(error);

      expect(action.type).toBe('[Menu] Get Fail');
      expect(action.payload).toEqual(error);
    });
  });

  describe('SaveAction', () => {
    it('returns action', () => {
      let payload = {name: 'Main'};
      let action = new actionCreators.SaveAction(payload);

      expect(action.type).toBe('[Menu] Save');
      expect(action.payload).toEqual(payload);
    });
  });

  describe('SaveSuccessAction', () => {
    it('returns action', () => {
      let payload = {id: 1};
      let action = new actionCreators.SaveSuccessAction(payload);

      expect(action.type).toBe('[Menu] Save Success');
      expect(action.payload).toEqual(payload);
    });
  });

  describe('SaveFailAction', () => {
    it('returns action', () => {
      let error = {status: 422, message: 'unprocessible.'};
      let action = new actionCreators.SaveFailAction(error);

      expect(action.type).toBe('[Menu] Save Fail');
      expect(action.payload).toEqual(error);
    });
  });

  describe('UpdateAction', () => {
    it('returns action', () => {
      let payload = {name: 'Main'};
      let action = new actionCreators.UpdateAction(payload);

      expect(action.type).toBe('[Menu] Update');
      expect(action.payload).toEqual(payload);
    });
  });

  describe('UpdateSuccessAction', () => {
    it('returns action', () => {
      let payload = {id: 1};
      let action = new actionCreators.UpdateSuccessAction(payload);

      expect(action.type).toBe('[Menu] Update Success');
      expect(action.payload).toEqual(payload);
    });
  });

  describe('UpdateFailAction', () => {
    it('returns action', () => {
      let error = {status: 422, message: 'unprocessible.'};
      let action = new actionCreators.UpdateFailAction(error);

      expect(action.type).toBe('[Menu] Update Fail');
      expect(action.payload).toEqual(error);
    });
  });

  describe('DeleteAction', () => {
    it('returns action', () => {
      let payload = 1;
      let action = new actionCreators.DeleteAction(payload);

      expect(action.type).toBe('[Menu] Delete');
      expect(action.payload).toEqual(payload);
    });
  });

  describe('DeleteSuccessAction', () => {
    it('returns action', () => {
      let payload = {id: 1};
      let action = new actionCreators.DeleteSuccessAction(payload);

      expect(action.type).toBe('[Menu] Delete Success');
      expect(action.payload).toEqual(payload);
    });
  });

  describe('DeleteFailAction', () => {
    it('returns action', () => {
      let error = {status: 422, message: 'unprocessible.'};
      let action = new actionCreators.DeleteFailAction(error);

      expect(action.type).toBe('[Menu] Delete Fail');
      expect(action.payload).toEqual(error);
    });
  });

  describe('OpenEditModalAction', () => {
    it('returns action', () => {
      let action = new actionCreators.OpenEditModalAction();

      expect(action.type).toBe('[Menu] Open Edit Modal');
    });
  });

  describe('CloseEditModalAction', () => {
    it('returns action', () => {
      let action = new actionCreators.CloseEditModalAction();

      expect(action.type).toBe('[Menu] Close Edit Modal');
    });
  });

  describe('ResetAction', () => {
    it('returns action', () => {
      let action = new actionCreators.ResetAction();

      expect(action.type).toBe('[Menu] Reset');
    });
  });

});
