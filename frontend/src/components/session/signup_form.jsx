import React from 'react';
import DatePicker from "react-datepicker";
import { Dropdown } from 'semantic-ui-react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            email: '',
            handle: '',
            password: '',
            password2: '',
            goals: '',
            experience: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const languageOptions = [
            { key: "ru", text: "Ruby" },
            { key: "re", text: "React" },
            { key: "ra", text: "Rails" },
            { key: "js", text: "Javascript" },
            { key: "no", text: "Node.js" },
            { key: "ht", text: "html" },
            { key: "cs", text: "css" }
        ]
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        <br />
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <br />
                        <input type="text"
                            value={this.state.handle}
                            onChange={this.update('name')}
                            placeholder="name"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <br />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <br />
                        <input type="submit" value="Submit" />
                        <Dropdown
                            placeholder='Select Language'
                            fluid
                            search
                            selection
                            options={languageOptions} />

                        <textarea placeholder='Goals'
                            onChange={this.update("goals")}
                            value={this.state.goals}/>

                        <textarea placeholder='Experience'
                            onChange={this.update("experience")}
                            value={this.state.experience}/>

                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />


                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;