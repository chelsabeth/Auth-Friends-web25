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
                friendsList: res.data.map()
            })
            .catch(err => console.log(err));
        })
    }
}