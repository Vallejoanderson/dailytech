import { UiModal } from '../interfaces/interfaces';
import { ModalType } from '../types/types';

const initialState: UiModal = {
  modalOpen: false
};

export const uiReducer = (state: UiModal = initialState, action: ModalType) => {
  switch (action.type) {
    case '[UI] Open Modal':
      return {
        ...state,
        modalOpen: true
      };
    case '[UI] Close Modal':
      return {
        ...state,
        modalOpen: false
      };
    default:
      return state;
  }
};
