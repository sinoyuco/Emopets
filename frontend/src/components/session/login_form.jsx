import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/tweets");
    }

    this.setState({ errors: nextProps.errors });
  }

  handleDemo() {
    this.props.login(this.props.demoUser);
  }

  componentDidMount() {
    this.props.clearSessionErrors();
    let eles = document.getElementsByClassName("login-yes-errors-input");

    Array.from(eles).forEach(ele => {
        ele.className = "login-no-errors-input";
    })

  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  handleEmailErr() {
      let field = document.getElementById("login-email");
        if (field === null) return;

      if (this.props.errors.email) {
        field.className = "login-yes-errors-input";
        return this.props.errors.email;
    } else {
        field.className = "login-no-errors-input";
    }
  }

  handlePasswordErr() {
      let field = document.getElementById("login-password");
        if (field === null) return;


      if (this.props.errors.password) {
        field.className = "login-yes-errors-input";
        return this.props.errors.password;
    } else {
        field.className = "login-no-errors-input";
    }
  }

  render() {
    return (
      <div className="login-form-container"> 
        <div className="login-form">
            <h1>Log-In Here</h1>
          <form onSubmit={this.handleSubmit}>
            <input
                id="login-email"
              className="login-no-errors-input"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <p className="signup-error">{this.handleEmailErr()}</p>
            <input
                id="login-password"
              type="password"
              className="login-no-errors-input"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <p className="signup-error">{this.handlePasswordErr()}</p>
            <input type="submit" value="Submit" />
          </form>
            <button className="demo-button" onClick={() => this.handleDemo()}>Demo</button>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);