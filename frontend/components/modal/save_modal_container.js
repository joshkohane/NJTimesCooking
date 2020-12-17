// import SaveModal from './save_modal';
// import { connect } from 'react-redux';
// import { login, resetErrors } from '../../actions/session_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';
// import { saveThisRecipe, deleteThisSave } from '../../actions/save_actions';

// const mapSTP = state => ({
//     errors: state.errors,
//     loggedIn: state.session.currentUser,
//     formType: 'login',
//     location: window.location.hash,
// })

// const mapDTP = dispatch => ({
//     login: (user) => dispatch(login(user)),
//     action: (user) => dispatch(login(user)),
//     openModal: (modal) => dispatch(openModal(modal)),
//     closeModal: () => dispatch(closeModal()),
//     resetErrors: () => dispatch(resetErrors()),
//     deleteThisSave: (recipeId) => dispatch(deleteThisSave(recipeId)),
// })

// export default connect(mapSTP, mapDTP)(SaveModal);

// import React from 'react'

// class SaveModal extends React.Component {
//     render() {
//         let { recipe, closeModal, openModal } = this.props
//         return (
//             <div className="modal-background" onClick={closeModal} >
//                 <div className="modal-child" onClick={e => e.stopPropagation()}>
//                     <div className="modal-form">
//                         <span onClick={closeModal} className="close-modal-btn">&#x2715;</span>
//                         <p className="modal-image-text">Are you sure you want to remoce {recipe.title} from your recipe box?</p>
//                         <button type="button" onClick={closeModal} className="modal-link">NO</button>
//                         <button type="button" onClick={() => openModal('signup')} className="modal-link">YES</button> :
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default SaveModal;