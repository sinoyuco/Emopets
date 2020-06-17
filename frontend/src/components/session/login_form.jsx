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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/tweets");
    }

    this.setState({ errors: nextProps.errors });
  }

  componentDidMount() {
    this.props.clearSessionErrors();
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
    if (this.props.errors.email) {
      return this.props.errors.email;
    }
  }

  handlePasswordErr() {
    if (this.props.errors.password) {
      return "Password field is required";
    }
  }

  render() {
    return (
      <div className="login-form-container" style={{ padding: "250px" }}>
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <h1>Log-In Here</h1>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <p className="signup-error">{this.handleEmailErr()}</p>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <p className="signup-error">{this.handlePasswordErr()}</p>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);