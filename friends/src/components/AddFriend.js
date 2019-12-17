import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
      .post("/api/friends")
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
                <input
                type="text"
                name="name"
                placeholder="Friends Name"
                value={this.state.newFriend.name}
                onChange={this.handleChange}
                />
                <input
                type="text"
                name="age"
                placeholder="Friends Age"
                value={this.state.newFriend.age}
                onChange={this.handleChange}
                />
                <input
                type="text"
                name="email"
                placeholder="Friends Email"
                value={this.state.newFriend.email}
                onChange={this.handleChange}
                />
                <button>Add New Friend</button>
              </form>
          </div>
      )
  }
}

export default AddFriend;
