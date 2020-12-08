import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            show: true
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
        this.props.closeModal();
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    toggleShow(e) {
        e.preventDefault();
        let newSetting = !this.state.show
        this.setState({ show: newSetting })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Join NJT Cooking</h1>
                <span onClick={this.props.closeModal}>&times;</span>
                <label>First Name
                    <input
                        type="text"
                        value={this.state.first_name}
                        onChange={this.handleChange('first_name')} />
                    {this.props.errors.session.map(err => err.includes('First') ? <p>Please enter your first name.</p> : '')}
                </label>
                <label>Last Name
                    <input
                        type="text"
                        value={this.state.last_name}
                        onChange={this.handleChange('last_name')} />
                    {this.props.errors.session.map(err => err.includes('Last') ? <p>Please enter your last name.</p> : '')}
                </label>
                <label>Email Address
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange('email')} />
                    {this.props.errors.session.map(err => err.includes('Email') ? <p>Please enter a valid email address.</p> : '')}
                </label>
                <label>Password
                    <input
                        type={this.state.show ? "password" : "text"}
                        value={this.state.password}
                        onChange={this.handleChange('password')} />
                    <div onClickCapture={this.toggleShow}>{this.state.show ? "Show" : "Hide"}</div>
                    {this.props.errors.session.map(err => err.includes('short') ? <p>Please provide a password that is between 6 and 255 characters in length.</p> : '')}
                </label>
                <input type="submit" value="Create Account" />
                <p>Aready have a Times account?</p>
                <button onClick={() => this.props.openModal('login')}>Log in</button>
                {/* <Link to='/login'>Log in</Link> */}
            </form>
        )
    }
}

export default SignupForm;