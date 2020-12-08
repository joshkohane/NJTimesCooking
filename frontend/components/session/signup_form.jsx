// import React from 'react';
// import { Link } from 'react-router-dom';

// class SignupForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             first_name: '',
//             last_name: '',
//             email: '',
//             password: '',
//             show: true
//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.toggleShow = this.toggleShow.bind(this);
//     }

//     componentDidUpdate(e) {
//         if (this.props.loggedIn) {
//             this.props.closeModal();
//         }
//     }

//     handleSubmit(user) {
//         return (e) => {
//             e.preventDefault();
//             this.props.signup(user);
//         }
//     }

//     handleChange(type) {
//         return (e) => {
//             this.setState({ [type]: e.target.value })
//         }
//     }

//     toggleShow(e) {
//         e.preventDefault();
//         let newSetting = !this.state.show
//         this.setState({ show: newSetting })
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit(this.state)} className="modal-form" >
//                 <h1 className="modal-title" >Join NJT Cooking</h1>
//                 <span onClick={this.props.closeModal} className="close-modal-btn" >&#x2715;</span>
//                 <input type="button" value="Continue as Demo User" className="btn demo-btn" onClick={this.handleSubmit({email: 'joshkohane@gmail.com', password: 'password'})} />
//                 <div className="modal-line-break">Or use your email</div>
//                 <label>
//                     <h2 className="modal-input-text" >First Name</h2>
//                     <input
//                         type="text"
//                         value={this.state.first_name}
//                         onChange={this.handleChange('first_name')} />
//                     {this.props.errors.session.map(err => err.includes('First') ? <p>Please enter your first name.</p> : '')}
//                 </label>
//                 <label>
//                     <h2 className="modal-input-text" >Last Name</h2>
//                     <input
//                         type="text"
//                         value={this.state.last_name}
//                         onChange={this.handleChange('last_name')} />
//                     {this.props.errors.session.map(err => err.includes('Last') ? <p>Please enter your last name.</p> : '')}
//                 </label>
//                 <label>
//                     <h2 className="modal-input-text" >Email Address</h2>
//                     <input
//                         type="text"
//                         value={this.state.email}
//                         onChange={this.handleChange('email')} />
//                     {this.props.errors.session.map(err => err.includes(`Email can't be blank`) ? <p>Please enter a valid email address.</p> : '')}
//                     {this.props.errors.session.map(err => err.includes(`Email has already been taken`) ? <p>{err}</p> : '')}
//                 </label>
//                 <label>
//                     <h2 className="modal-input-text" >Password</h2>
//                     <input
//                         type={this.state.show ? "password" : "text"}
//                         value={this.state.password}
//                         onChange={this.handleChange('password')} />
//                     <div onClickCapture={this.toggleShow}>{this.state.show ? "Show" : "Hide"}</div>
//                     {this.props.errors.session.map(err => err.includes('short') ? <p>Please provide a password that is between 6 and 255 characters in length.</p> : '')}
//                 </label>
//                 <input type="submit" value="Create Account" className="btn modal-btn" />
//                 <div className="modal-footer" >
//                     <p className="modal-switch-page" >Aready have a Times account?</p>
//                     <button onClick={() => this.props.openModal('login')} className="modal-link" >Log in</button>
//                 </div>
//             </form>
//         )
//     }
// }

// export default SignupForm;