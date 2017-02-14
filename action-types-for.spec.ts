import {actionTypesFor} from './action-types-for';

fdescribe('actionTypesFor', () => {

  describe('given a resourceName of menu', () => {
    let actionTypes;

    beforeEach(() => {
      actionTypes = actionTypesFor('menu');
    });

    it('returns action names', () => {

      expect(actionTypes.MENU_LOAD).toBe('[Menu] Load');
      expect(actionTypes.MENU_LOAD_SUCCESS).toBe('[Menu] Load Success');
      expect(actionTypes.MENU_LOAD_FAIL).toBe('[Menu] Load Fail');

      expect(actionTypes.MENU_GET).toBe('[Menu] Get');
      expect(actionTypes.MENU_GET_SUCCESS).toBe('[Menu] Get Success');
      expect(actionTypes.MENU_GET_FAIL).toBe('[Menu] Get Fail');

      expect(actionTypes.MENU_SAVE).toBe('[Menu] Save');
      expect(actionTypes.MENU_SAVE_SUCCESS).toBe('[Menu] Save Success');
      expect(actionTypes.MENU_SAVE_FAIL).toBe('[Menu] Save Fail');

      expect(actionTypes.MENU_UPDATE).toBe('[Menu] Update');
      expect(actionTypes.MENU_UPDATE_SUCCESS).toBe('[Menu] Update Success');
      expect(actionTypes.MENU_UPDATE_FAIL).toBe('[Menu] Update Fail');

      expect(actionTypes.MENU_DELETE).toBe('[Menu] Delete');
      expect(actionTypes.MENU_DELETE_SUCCESS).toBe('[Menu] Delete Success');
      expect(actionTypes.MENU_DELETE_FAIL).toBe('[Menu] Delete Fail');

      expect(actionTypes.MENU_OPEN_EDIT_MODAL).toBe('[Menu] Open Edit Modal');
      expect(actionTypes.MENU_CLOSE_EDIT_MODAL).toBe('[Menu] Close Edit Modal');
      expect(actionTypes.MENU_RESET).toBe('[Menu] Reset');

      // Aliases

      expect(actionTypes.load).toBe('[Menu] Load');
      expect(actionTypes.loadSuccess).toBe('[Menu] Load Success');
      expect(actionTypes.loadFail).toBe('[Menu] Load Fail');

      expect(actionTypes.get).toBe('[Menu] Get');
      expect(actionTypes.getSuccess).toBe('[Menu] Get Success');
      expect(actionTypes.getFail).toBe('[Menu] Get Fail');

      expect(actionTypes.save).toBe('[Menu] Save');
      expect(actionTypes.saveSuccess).toBe('[Menu] Save Success');
      expect(actionTypes.saveFail).toBe('[Menu] Save Fail');

      expect(actionTypes.update).toBe('[Menu] Update');
      expect(actionTypes.updateSuccess).toBe('[Menu] Update Success');
      expect(actionTypes.updateFail).toBe('[Menu] Update Fail');

      expect(actionTypes.delete).toBe('[Menu] Delete');
      expect(actionTypes.deleteSuccess).toBe('[Menu] Delete Success');
      expect(actionTypes.deleteFail).toBe('[Menu] Delete Fail');

      expect(actionTypes.openEditModal).toBe('[Menu] Open Edit Modal');
      expect(actionTypes.closeEditModal).toBe('[Menu] Close Edit Modal');
      expect(actionTypes.reset).toBe('[Menu] Reset');

    });
  });

  describe('lacking a resourceName', () => {

    it('should raise an error', () => {
      expect(() => actionTypesFor(undefined)).toThrow(new Error('argument resourceName is required'));
    });
  });

});
