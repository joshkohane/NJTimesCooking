import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            show: true,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }
    
    componentDidUpdate(e) {
        if (this.props.loggedIn) {
            this.props.closeModal();
        }
    }

    handleSubmit(user) {
        return (e) => {
            e.preventDefault();
            this.props.login(user);
        }
    }
    
    handleChange(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    toggleShow(e) {
        e.preventDefault();
        let newSetting = !this.state.show
        this.setState({show: newSetting})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit(this.state)} className="modal-form" >
                <h1>Log in to NJT Cooking</h1>
                <span onClick={this.props.closeModal}>&#x2715;</span>
                <label>Email Address
                    <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange('email')}/>
                </label>
                <label>Password
                    <input
                        type={this.state.show ? "password" : "text"}
                        value={this.state.password}
                        onChange={this.handleChange('password')} />
                    <div onClick={this.toggleShow}>{this.state.show ? "Show" : "Hide" }</div>
                    <p>{this.props.errors.session.join('')}</p>
                </label>
                <input type="submit" value="Log In" className="btn modal-btn"/>
                <input type="button" value="Demo User" className="btn modal-btn" onClick={this.handleSubmit({email: 'joshkohane@gmail.com', password: 'password'})} />
                <p>Don't have a Times account?</p>
                <button onClick={() => this.props.openModal('signup')} className="modal-link">Create one</button>
            </form>
        )
    }
}

export default LoginForm;