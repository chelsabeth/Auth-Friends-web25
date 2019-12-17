import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friendsList: []
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
        .get("api/friends")
        .then(res => {
            this.setState({
                friendsList: res.data
            })
            // .catch(err => console.log("An error has occured while fetching friends", err));
        })
    }

    render() {
        return (
            <div>
                <h1>Friends List</h1>
                {this.state.friendsList.map(friend => (
                    <div key={friend.id}>
                        <h2>Name: {friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default FriendsList;