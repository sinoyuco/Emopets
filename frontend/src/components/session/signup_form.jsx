import React from 'react';
import DatePicker from "react-datepicker";
// import { Dropdown } from 'semantic-ui-react';
import "react-datepicker/dist/react-datepicker.css";
// import 'semantic-ui-css/semantic.min.css';

// import 'semantic-ui-css/components/dropdown.css'
// import 'semantic-ui-css/components/transition.css'
// import 'semantic-ui-css/components/reset.css'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            email: '',
            password: '',
            password2: '',
            goals: '',
            experience: '',
            language: '',
            birthdate: '',
            pronouns: '',
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
        debugger
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        let user = {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            password2: this.state.password2,
            goals: this.state.goals,
            experience: this.state.experience,
            birthdate: this.state.birthdate,
            language: this.state.language,
            pronouns: this.state.pronouns
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
        // const languageOptions = [
        //     { key: "ru", text: "Ruby" },
        //     { key: "re", text: "React" },
        //     { key: "ra", text: "Rails" },
        //     { key: "js", text: "Javascript" },
        //     { key: "no", text: "Node.js" },
        //     { key: "ht", text: "HTML" },
        //     { key: "cs", text: "CSS" }
        // ]
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
                            value={this.state.name}
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
                        
                        <label>Language:
                            <br />
                            <select onClick={this.update('language')}> 
                                <option value="" selected disabled hidden>Please Select</option>
                                <option value={this.state.language}>Ruby</option>
                                <option value={this.state.language}>Rails</option>
                                <option value={this.state.language}>Javascript</option>
                                <option value={this.state.language}>React</option>
                                <option value={this.state.language}>HTML</option>
                                <option value={this.state.language}>CSS</option>
                                <option value={this.state.language}>Node.js</option>
                            </select> 
                        </label>
                        < br />

                        <label>Pronouns:
                            <br />
                            <select onClick={this.update('pronouns')}>
                                <option value="" selected disabled hidden>Please Select</option>
                                <option value={this.state.pronouns}>He/Him/His</option>
                                <option value={this.state.pronouns}>She/Her/Hers</option>
                                <option value={this.state.pronouns}>They/Them/Their</option>
                                <option value={this.state.pronouns}>Xe/Xem/Xyr</option>
                            </select>
                        </label>
                        < br />


                        <label>Goals:
                             <br />
                            <textarea
                                value={this.state.goals}
                                onChange={this.update('goals')} />
                        </label>

                            <br />
                            <br />
                            
                        <label> Experience:
                             <br />
                            <textarea 
                                value={this.state.experience}
                                onChange={this.update('experience')} />
                        </label>

                        <br />

                        <br />

                        <label>Birthdate:   
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                        </label>
                        <br />


                        {this.renderErrors()}
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;