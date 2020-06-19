import React from 'react';
import { Redirect } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EditForm extends React.Component {
    constructor(props){
        super(props);

        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleDropdownp = this.handleDropdownp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameErr = this.handleNameErr.bind(this)
        this.handleGoalErr = this.handleGoalErr.bind(this)
        this.handleExperienceErr = this.handleExperienceErr.bind(this)

        this.state = {
            id: this.props.currentUser.id,
            email: this.props.currentUser.email,
            password: this.props.currentUser.password,
            birthDate: this.props.currentUser.birthDate,
            name: this.props.currentUser.name,
            language: this.props.currentUser.language,
            pronouns: this.props.currentUser.pronouns,
            goal: this.props.currentUser.goal,
            experience: this.props.currentUser.experience,

        }
        
    }
    componentDidMount() {
        // this.props.fetchUsers();
        this.props.fetchUser(this.props.currentUser.id)
            this.props.clearSessionErrors();


            let inputs = document.getElementsByClassName("signup-yes-errors-input");

            Array.from(inputs).forEach(input => {
                input.className = "signup-no-errors-input";
            });

            let selects = document.getElementsByClassName("signup-yes-errors-select");

            Array.from(selects).forEach(select => {
                select.className = "signup-no-errors-select";
            });

            let textareas = document.getElementsByClassName("signup-yes-errors-textarea");

            Array.from(textareas).forEach(textarea => {
                textarea.className = "signup-no-errors-textarea";
            });
    } 

    update(field) {
        return (e) => {
            this.props.clearSessionErrors();

            this.setState({
                [field]: e.currentTarget.value,
            });

        }
    }

    handleNameErr() {
        let field = document.getElementById("signup-name");
        if (field === null) return;

        if (this.props.errors.name) {
            field.className = "signup-yes-errors-input";
            return "Name field is required";
        } else {
            field.className = "signup-no-errors-input";
        }

    }

    handleGoalErr() {
        let field = document.getElementById("signup-name");
        if (field === null) return;

        if (this.props.errors.goal) {
            field.className = "signup-yes-errors-input";
            return "Goal field is required";
        } else {
            field.className = "signup-no-errors-input";
        }

    }

    handleExperienceErr(){
        let field = document.getElementById("signup-name");
        if (field === null) return;

        if (this.props.errors.experience) {
            field.className = "signup-yes-errors-input";
            return "Experience field is required";
        } else {
            field.className = "signup-no-errors-input";
        }

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
            id: this.state.id,
            email: this.state.email,
            password: this.state.password,
            birthDate: this.state.birthDate,
            name: this.state.name,
            goal: this.state.goal,
            experience: this.state.experience,
            language: this.state.language,
            pronouns: this.state.pronouns,

        };
        //debugger;
        this.props.editUser(user);
        this.props.history.push('/show')
       
       
    }

    handleChange = (date) => {
        this.setState({
            birthDate: date,
        });
    };

    render() {
        const {email, name, language, pronouns, goal, experience} = this.state;
        if (this.props.currentUser === undefined) {
            return <> </>
        } else {
            return (
                <div className="signup-form-container1" style={{ paddingTop: "50px" }}>
                    <form onSubmit={this.handleSubmit} >
                        <div className="signup-form1">
                            <h1>Edit your profile</h1>
                            <p className="edit-email-warning">*Emails cannot be changed!</p>
                            <input
                                type="text"
                                value={email}
                                className="signup-no-errors-input"
                                // onChange={this.update("email")}
                                // placeholder="Email"
                                id="signup-email"
                                disabled
                            />
                            {/* <p className="signup-error">{this.handleEmailErr()}</p> */}

                            <label>
                                Name:
                                <br/>
                            <input
                                className="signup-no-errors-input"
                                type="text"
                                value={name}
                                onChange={this.update("name")}
                                placeholder="Name"
                                id="signup-name"
                            />
                                <p className="signup-error">{this.handleNameErr()}</p>
                            </label>

                            {/* <p className="signup-error">{this.handleNameErr()}</p> */}

                            <div className="signup-dropdown">
                            <span>
                                <label>Language/Framework:

                                <select
                                    onChange={this.handleDropdown}
                                    value={language}
                                    id="signup-lang"
                                    className="signup-no-errors-select"
                                    name={this.state.language === "" ? 'default' : 'selected'} 
                                >
                                    <option value="" selected disabled hidden>
                                        Language/framework
                                    </option>
                                    <option value="Ruby">Ruby</option>
                                    <option value="Rails">Rails</option>
                                    <option value="Javascript">Javascript</option>
                                    <option value="React">React</option>
                                    <option value="HTML">HTML</option>
                                    <option value="CSS">CSS</option>
                                    <option value="Node.js">Node.js</option>
                                </select>
                                    </label>
                            </span>
                            {/* <p className="signup-error">{this.handleLangErr()}</p> */}

                            <span>
                                <label>Pronouns:
                                <select
                                    onChange={this.handleDropdownp}
                                    value={pronouns}
                                    id="signup-pro"
                                    className="signup-no-errors-select" 
                                    name={this.state.pronouns === "" ? 'default' : 'selected'}
                                >
                                    <option value="" selected disabled hidden>
                                        Pronouns
                                    </option>
                                    <option value="He/Him/His">He/Him/His</option>
                                    <option value="She/Her/Hers">She/Her/Hers</option>
                                    <option value="They/Them/Their">They/Them/Their</option>
                                    <option value="Xe/Xem/Xyr">Xe/Xem/Xyr</option>
                                </select>
                                    </label>
                            </span>
                            {/* <p className="signup-error">{this.handleProErr()}</p> */}
                            </div>
                            <label>
                                Goal:
                            <br />
                                <textarea
                                    className="signup-no-errors-textarea"
                                    style={{ resize: "none" }}
                                    value={goal}
                                    onChange={this.update("goal")}
                                    id="signup-goal"
                                    placeholder='Goal'
                                />
                                <p className="signup-error">{this.handleGoalErr()}</p>
                            </label>

                            {/* <p className="signup-error">{this.handleGoalErr()}</p> */}

                            <label>
                                {/* {" "} */}
                                Experience:
                                 <br />
                                <textarea
                                className="signup-no-errors-textarea"   
                                    style={{ resize: "none" }}
                                    value={experience}
                                    onChange={this.update("experience")}
                                    id="signup-exp"
                                    placeholder='Experience'
                                />
                                <p className="signup-error">{this.handleExperienceErr()}</p>
                            </label>

                            {/* <p className="signup-error">{this.handleExpErr()}</p> */}

                            {/* <label id="signup-birthdate">
                                Birthdate:
                                <DatePicker
                                    selected={birthDate}
                                    onChange={this.handleChange}
                                />
                            </label> */}
                            {/* <p className="signup-error">{this.handleBirthDateErr()}</p> */}

                            {/* {this.renderErrors()} */}

                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            )
        }
    }
};


export default EditForm;