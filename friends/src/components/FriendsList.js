import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import "../App.css";

import AddFriend from "./AddFriend";

class FriendsList extends React.Component {
    state = {
        friendsList: []
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
        .get("/api/friends")
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
                <p className="friendslist-title">Friends List</p>
                <div className="add-friend-form">
                <AddFriend/>
                </div>
                {this.state.friendsList.map(friend => (
                    <div key={friend.id} className="friends">
                        <h3 className="name-title">Name: {friend.name}</h3>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default FriendsList;