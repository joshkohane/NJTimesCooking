import { combineReducers } from 'redux';
import ModalReducer from './modal_reducer';
import SaveModalReducer from './save_modal_reducer'

export default combineReducers({
    modal: ModalReducer,
    saveModal: SaveModalReducer,
})