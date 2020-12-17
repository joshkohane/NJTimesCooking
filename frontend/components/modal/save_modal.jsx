// import React from 'react';
// import { closeModal } from '../../actions/modal_actions';
// import { connect } from 'react-redux';
// import LoginFormContainer from '../session/login_form_container';
// import SignupFormContainer from '../session/signup_form_container';

// const Modal = ({ saveModal, closeModal, location }) => {
//     if (!saveModal) {
//         return null;
//     }
//     let component;
//     switch (modal) {
//         case 'save':
//             component = <LoginFormContainer />;
//             break;
//         default:
//             return null;
//     }
//     return (
//         <div>
//             {(location === '#/') ?
//                 <div className="modal-background" onClick={closeModal}>
//                     <div className="modal-child" onClick={e => e.stopPropagation()}>
//                         <div className="modal-image-tag">
//                             <img className="modal-image" src={window.modalIMG} alt="Some delicious looking brownies" />
//                             <p className="modal-image-text">Unlock New Jersey Times recipes and your <br />personal recipe box with a free account.</p>
//                         </div>
//                         {component}
//                     </div>
//                 </div>
//                 :
//                 <div className="modal-background">
//                     <div className="modal-child">
//                         <div className="modal-image-tag">
//                             <img className="modal-image" src={window.modalIMG} alt="Some delicious looking brownies" />
//                             <p className="modal-image-text">Unlock New Jersey Times recipes and your <br />personal recipe box with a free account.</p>
//                         </div>
//                         {component}
//                     </div>
//                 </div>
//             }
//         </div>
//     );
// }

// const mapSTP = state => (
//     {
//         modal: state.ui.modal,
//         location: window.location.hash,
//     }
// )

// const mapDTP = dispatch => ({
//     closeModal: () => dispatch(closeModal())
// })

// export default connect(mapSTP, mapDTP)(Modal);