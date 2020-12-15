export const OPEN_MODAL = 'OPEN_MODAL';
export const OPEN_SAVE_MODAL = 'OPEN_SAVE_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal) => ({
    type: OPEN_MODAL,
    modal
})

export const openSaveModal = (modal, recipe) => ({
    type: OPEN_SAVE_MODAL,
    modal,
    recipe
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})