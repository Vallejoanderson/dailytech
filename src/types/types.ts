export const UI_OPEN_MODAL = '[UI] Open Modal';
export const UI_CLOSE_MODAL = '[UI] Close Modal';

export type ActionUI =
  | { type: typeof UI_OPEN_MODAL }
  | { type: typeof UI_CLOSE_MODAL };
