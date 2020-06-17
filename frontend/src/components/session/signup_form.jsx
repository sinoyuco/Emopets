import React from 'react';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
// import DayPicker from 'react-day-picker';

// import 'react-day-picker/lib/style.css';
// import { Dropdown } from 'semantic-ui-react';
import "react-datepicker/dist/react-datepicker.css";
// import 'semantic-ui-css/semantic.min.css';



class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // startDate: new Date(),
      birthDate: "",
      email: "",
      password: "",
      password2: "",
      goal: "",
      experience: "",
      language: "",
      pronouns: "",
      errors: {},
    };

    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleDropdownp = this.handleDropdownp.bind(this);
    // this.hanldeChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  // componentWillReceiveProps(nextProps) {
  //     if (nextProps.signedIn === true) {
  //         this.props.history.push('/login');
  //     }

  //     this.setState({ errors: nextProps.errors })
  // }

  update(field) {
    //
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleDropdown(e) {
    this.setState({ language: e.target.value });
  }
  handleDropdownp(e) {
    this.setState({ pronouns: e.target.value });
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
      birthDate: this.state.birthDate,
    };

    // this.props.signup(user, this.props.history);
    this.props.signup(user);
    this.props.login(user);
    // this.props.history.push('/show')
  }

  handleChange = (date) => {
    this.setState({
      birthDate: date,
    });
  };

  handleEmailErr() {
    if (this.props.errors.email) {
      return "Enter a valid email";
    }
  }

  handlePasswordErr() {
    if (this.props.errors.password) {
      return "Password must be at least 6 characters";
    }
  }

  handlePassword2Err() {
    if (this.props.errors.password2) {
      return "Passwords must match";
    }
  }

  handleNameErr() {
    if (this.props.errors.name) {
      return "Name field is required";
    }
  }

  handleLangErr() {
    if (this.props.errors.language) {
      return "Language field is required";
    }
  }

  handleProErr() {
    if (this.props.errors.pronouns) {
      return "Pronoun field is required";
    }
  }

  handleBirthDateErr() {
    if (this.props.errors.language) {
      return "Birthdate field is required";
    }
  }

  handleGoalErr() {
    if (this.props.errors.goal) {
      return "Goal field is required";
    }
  }

  handleExpErr() {
    if (this.props.errors.experience) {
      return "Experience field is required";
    }
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }


  render() {

    return (
      <div className="signup-form-container" style={{ paddingTop: "50px" }}>
        <form onSubmit={this.handleSubmit} className="signup-form-with-header">
          <div className="signup-form">
            <h1>Sign Up Here</h1>

            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
              id="signup-email"
            />
            <p className="signup-error">{this.handleEmailErr()}</p>

            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Name"
              id="signup-name"
            />

            <p className="signup-error">{this.handleNameErr()}</p>

            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
              id="signup-password"
            />
            <p className="signup-error">{this.handlePasswordErr()}</p>

            <input
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
            />

            <p className="signup-error">{this.handlePassword2Err()}</p>

            <span>
              <label>Language/Framework:</label>

              <select
                onChange={this.handleDropdown}
                value={this.state.value}
                id="signup-lang"
              >
                <option value="" selected disabled hidden>
                  Please Select
                </option>
                <option value="Ruby">Ruby</option>
                <option value="Rails">Rails</option>
                <option value="Javascript">Javascript</option>
                <option value="React">React</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Node.js">Node.js</option>
              </select>
            </span>
            <p className="signup-error">{this.handleLangErr()}</p>

            <span>
              <label>Pronouns:</label>
              <select
                onChange={this.handleDropdownp}
                value={this.state.value}
                id="signup-pro"
              >
                <option value="" selected disabled hidden>
                  Please Select
                </option>
                <option value="He/Him/His">He/Him/His</option>
                <option value="She/Her/Hers">She/Her/Hers</option>
                <option value="They/Them/Their">They/Them/Their</option>
                <option value="Xe/Xem/Xyr">Xe/Xem/Xyr</option>
              </select>
            </span>
            <p className="signup-error">{this.handleProErr()}</p>

            <label>
              Goal:
              <br />
              <textarea
                value={this.state.goal}
                onChange={this.update("goal")}
                id="signup-goal"
              />
            </label>

            <p className="signup-error">{this.handleGoalErr()}</p>

            <label>
              {" "}
              Experience:
              <br />
              <textarea
                value={this.state.experience}
                onChange={this.update("experience")}
                id="signup-exp"
              />
            </label>

            <p className="signup-error">{this.handleExpErr()}</p>

            <label id="signup-birthdate">
              Birthdate:
              <DatePicker
                selected={this.state.birthDate}
                onChange={this.handleChange}
              />
            </label>
            <p className="signup-error">{this.handleBirthDateErr()}</p>

            {/* {this.renderErrors()} */}

            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;