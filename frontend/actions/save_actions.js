import { saveRecipe, deleteSave } from '../util/saves_util';

export const RECEIVE_SAVE = 'RECEIVE_SAVE';
export const DELETE_A_SAVE = 'DELETE_A_SAVE';

export const receiveSave = (save) => {
    // debugger
    return {
    type: RECEIVE_SAVE,
    save
}}

export const deleteASave = (save) => ({
    type: DELETE_A_SAVE,
    save
})

export const saveThisRecipe = (recipeId) => dispatch => saveRecipe(recipeId)
    .then(save => dispatch(receiveSave(save)))

export const deleteThisSave = (saveId) => dispatch => deleteSave(saveId)
    .then(save => dispatch(deleteASave(save)))