import { UiModal } from '../interfaces/interfaces';
import { ActionUI, UI_OPEN_MODAL, UI_CLOSE_MODAL } from '../types/types';

const initialState: UiModal = {
  modalOpen: false
};

export const uiReducer = (state: UiModal = initialState, action: ActionUI) => {
  switch (action.type) {
    case UI_OPEN_MODAL:
      return {
        ...state,
        modalOpen: true
      };
    case UI_CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false
      };
    default:
      return state;
  }
};
