import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            show: true,
            showClasses: 'modal-show-btn',
        }
        this.handleDemoUser = this.handleDemoUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

    componentDidMount() {
        this.props.resetErrors();
    }

    componentDidUpdate() {
        if (this.props.loggedIn) {
            this.props.closeModal();
        }
    }
    
    handleDemoUser(e) {
        e.preventDefault();
        this.props.login({ email: 'joshkohane@gmail.com', password: 'password' });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    toggleShow(e) {
        e.preventDefault();
        let newSetting = !this.state.show
        this.setState({ show: newSetting, showClasses: 'modal-show-btn modal-show-blue' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="modal-form" >
                <h1 className="modal-title" >{ this.props.formType === 'login' ? "Log in to NJT Cooking" : "Join NJT Cooking" }</h1>
                {this.props.location === '#/' ? 
                    <span onClick={this.props.closeModal} className="close-modal-btn">&#x2715;</span>
                    : ''
                }
                <input type="button" value="Continue as Demo User" className="btn demo-btn" onClick={this.handleDemoUser} />
                <div className="modal-line-break">Or use your email</div>
                {this.props.formType === 'signup' ? 
                    <label className="modal-input-field" >
                        <h2 className="modal-input-text" >First Name</h2>
                        <input
                            type="text"
                            value={this.state.first_name}
                            className="modal-input"
                            onChange={this.handleChange('first_name')} />
                        {this.props.errors.session.map(err => err.includes('First') ? <p className="modal-errors" >Please enter your first name.</p> : '')}
                    </label>
                    : ''
                }
                {this.props.formType === 'signup' ? 

                    <label className="modal-input-field" >
                        <h2 className="modal-input-text" >Last Name</h2>
                        <input
                            type="text"
                            value={this.state.last_name}
                            className="modal-input"
                            onChange={this.handleChange('last_name')} />
                        {this.props.errors.session.map(err => err.includes('Last') ? <p className="modal-errors" >Please enter your last name.</p> : '')}
                    </label>
                    : ''
                }

                <label className="modal-input-field" >
                    <h2 className="modal-input-text" >Email Address</h2>
                    <input
                        type="text"
                        value={this.state.email}
                        className="modal-input"
                        onChange={this.handleChange('email')} />
                    {this.props.errors.session.map(err => err.includes(`Email can't be blank`) ? <p className="modal-errors" >Please enter a valid email address.</p> : '')}
                    {this.props.errors.session.map(err => err.includes(`Email has already been taken`) ? <p className="modal-errors" >{err}</p> : '')}
                </label>
                <label className="modal-input-field" >
                    <h2 className="modal-input-text" >Password</h2>
                    <div className="modal-password-field">
                        <input
                            type={this.state.show ? "password" : "text"}
                            value={this.state.password}
                            className="modal-input modal-password-input"
                            onChange={this.handleChange('password')} />
                        <div className={this.state.showClasses} onClick={this.toggleShow}>{this.state.show ? "Show" : "Hide"}</div>
                        {this.props.errors.session.map(err => err.includes('short') ? <p className="modal-password-errors" >Please provide a password that is between 6 and 255 characters in length.</p> : '')}
                        {this.props.errors.session.map(err => err.includes('NJTimes account') ? <p className="modal-password-errors" >{err}</p> : '')}
                    </div>
                </label>
                <div className="modal-submit-btn">
                    <input type="submit" value={this.props.formType === 'login' ? "Log In" : "Create Account"} className="btn modal-btn" />
                </div>
                <div className="modal-footer" >
                    <p className="modal-switch-page" >{ this.props.formType === 'login' ? "Don't have a Times account?" : "Already have a Times account?" }</p>
                    {this.props.formType === 'login' ?
                        <button type="button" onClick={() => this.props.openModal('signup')} className="modal-link">Create one</button> :
                        <button type="button" onClick={() => this.props.openModal('login')} className="modal-link" >Log in</button>
                    }
                </div>
            </form>
        )
    }
}

export default SessionForm;