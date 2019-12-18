import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.css";
import styled from "styled-components";

const TextInput = styled.input`
    margin: 1% 1%;
    height: 40px;
    width: 15%;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0 2%;
    border: 2px solid lightgrey;
    `

    const ButtonStyle = styled.button`
    width: 15%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #EB1B2C;
    color: #FFF;
    margin-top: 1%;
   `

class AddFriend extends React.Component {
  state = {
    newFriend: {
      id: Date.now(),
      name: "",
      age: "",
      email: ""
    }
  };

  handleChange = e => {
      this.setState({
          newFriend: {
              ...this.state.newFriend,
              [e.target.name]: e.target.value
          }
      })
  }

  addFriend = () => {
    axiosWithAuth()
      .post("/api/friends", this.state.newFriend)
      .then(res => {
        this.setState({
            newFriend: res.data
        });
      });
  };

  render() {
      return (
          <div>
              <form onSubmit={this.addFriend}>
                <TextInput
                type="text"
                name="name"
                placeholder="Friends Name"
                value={this.state.newFriend.name}
                onChange={this.handleChange}
                />
                <TextInput
                type="text"
                name="age"
                placeholder="Friends Age"
                value={this.state.newFriend.age}
                onChange={this.handleChange}
                />
                <TextInput
                type="text"
                name="email"
                placeholder="Friends Email"
                value={this.state.newFriend.email}
                onChange={this.handleChange}
                />
                <ButtonStyle>Add New Friend</ButtonStyle>
              </form>
          </div>
      )
  }
}

export default AddFriend;
