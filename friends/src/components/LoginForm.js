import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const TextInput = styled.input`
    margin: 1% 3%;
    height: 40px;
    width: 50%;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0 2%;
    border: 2px solid lightgrey;
    `

    const ButtonStyle = styled.button`
    width: 40%;
    height: 45px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #EB1B2C;
    color: #FFF;
    margin-top: 1%;
   `

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
            ...this.state,
            isFetching: true
        });
        axiosWithAuth()
        .post("/api/login",  this.state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            this.props.history.push("/friendsList");
        })
        .catch(err => console.log("Sorry, an error has occured", err));
    };

        render() {
            console.log(this.state);
            return (
                <div>
                    <form onSubmit={this.login}>
                        <TextInput
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        />
                        <TextInput
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        />
                        <ButtonStyle>Log In</ButtonStyle>
                        {this.state.isFetching && "Logging You In...Please Wait"}
                    </form>
                </div>
            )
    }
}

export default LoginForm;
