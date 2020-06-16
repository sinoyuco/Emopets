import React from 'react';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
// import { Dropdown } from 'semantic-ui-react';
// import "react-datepicker/dist/react-datepicker.css";
// import 'semantic-ui-css/semantic.min.css';



class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // startDate: new Date(),
            birthDate: '',
            email: '',
            password: '',
            password2: '',
            goal: '',
            experience: '',
            language: '',
            pronouns: '',
            errors: {}
        };

        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleDropdownp = this.handleDropdownp.bind(this);
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

    handleDropdown(e) {
        this.setState({language: e.target.value})
    }
    handleDropdownp(e) {
        this.setState({pronouns: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        
        let user = {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            password2: this.state.password2,
            goal: this.state.goal,
            experience: this.state.experience,
            language: this.state.language,
            pronouns: this.state.pronouns,
            birthDate: this.state.birthDate
        };

        // this.props.signup(user, this.props.history);
        this.props.signup(user);
    }

    handleChange = date => {
        this.setState({
            birthDate: date
        });
    };

    renderErrors() {
        return (
            <div>
                {Object.keys(this.state.errors).map((error, i) => (
                    <p key={`error-${i}`} className='signup-error'>
                        {this.state.errors[error]}
                    </p>
                ))}
            </div>
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
            <div className="signup-form-container">
                <nav className='signup-nav'>
                    <img src='http://localhost:3000/images/main_logo_no_text.png' alt="" height='60' width='200'></img>
                    <ul>
                        <li>
                            <Link to='/login'>
                                <button>Log In</button>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <button>Home</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <form onSubmit={this.handleSubmit} className='signup-form-with-header'>
                    <div className="signup-form">
                    <h1>Sign Up Here</h1>
                     
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                           
                        />
                     
                        <input type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            placeholder="Name"
                        />
                     
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                     
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                     
                        <span> 
                        <label>Language:</label>
                         
                            <select onChange={this.handleDropdown} value={this.state.value}> 
                                <option value="" selected disabled hidden>Please Select</option>
                                <option value="Ruby">Ruby</option>
                                <option value="Rails">Rails</option>
                                <option value="Javascript">Javascript</option>
                                <option value="React">React</option>
                                <option value="HTML">HTML</option>
                                <option value="CSS">CSS</option>
                                <option value="Node.js">Node.js</option>
                            </select> 
                    
                        
                        </span>

                        <span> 
                        <label>Pronouns:</label>                          
                                <select onChange={this.handleDropdownp} value={this.state.value}>
                                    <option value="" selected disabled hidden>Please Select</option>
                                    <option value="He/Him/His">He/Him/His</option>
                                    <option value="She/Her/Hers">She/Her/Hers</option>
                                    <option value="They/Them/Their">They/Them/Their</option>
                                    <option value="Xe/Xem/Xyr">Xe/Xem/Xyr</option>
                                </select>
                        </span>

                     



                        <label>Goal:
                          <br />
                            <textarea
                                value={this.state.goal}
                                onChange={this.update('goal')} />
                        </label>

                         
                         
                            
                        <label> Experience:
                          <br />

                            <textarea 
                                value={this.state.experience}
                                onChange={this.update('experience')} />
                        </label>

                     

                     

                        <label>Birthdate:   
                            <DatePicker
                                selected={this.state.birthDate}
                                onChange={this.handleChange}
                            />
                        </label>
                     


                        {this.renderErrors()}
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;