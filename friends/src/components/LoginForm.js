import React from "react";

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        },
        isFetching: false
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.setState({
            isFetching: true
        })
        //axiosWithAuth will go here
    }

        render() {
            return (
                <div>
                    <form>
                        <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        />
                        <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        />
                        <button>Log In</button>
                        {this.state.isFetching && "Logging You In...Please Wait"}
                    </form>
                </div>
            )
    }
}

export default LoginForm;
