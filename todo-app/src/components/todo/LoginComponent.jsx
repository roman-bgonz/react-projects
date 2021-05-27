import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "roman",
            password: '',
            hasLoginFailed: false,
            showSuccessMsg: false
        }

        // this.handleUserNameChange = this.handleUserNameChange.bind(this);
        // this.handlePassChange = this.handlePassChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    /**
     * The next methods are built in order to create controller field,
     * which is a controller component at the larger picure is something whicb the entire
     * change in the UI is dictated by the state, when something happens, the state is updated
     * and when the state is updated the view is updated too
     */
    handleChange(event) {
        //console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handleUserNameChange(event) {
    //     //console.log(event.target.value)
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    // handlePassChange(event) {
    //     this.setState({
    //         password: event.target.value
    //     });
    // }


    /**
     * Login method
     */
    loginClicked() {

        if (this.state.username === "roman" && this.state.password === "dummy") {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            // this.setState({
            //     showSuccessMsg: true,
            //     hasLoginFailed: false
            // })
        } else {
            this.setState({
                hasLoginFailed: true,
                showSuccessMsg: false
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentils</div>}
                    {/* <ShowSuccessfulLogin showSuccessMsg={this.state.showSuccessMsg} /> */}
                    {this.state.showSuccessMsg && <div>Login successful</div>}
                    User name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.pasword} onChange={this.handleChange}></input>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>

            </div>
        );
    }
}

export default LoginComponent;