export type ModalType =
{
  type: | '[UI] Close Modal'
        | '[UI] Open Modal',
};

export const types = {
  uiOpenModal: '[UI] Open Modal',
  uiCloseModal: '[UI] Close Modal'
};
