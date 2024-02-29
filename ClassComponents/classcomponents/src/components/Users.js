import { useState, Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }
  toggleUsersHandler() {
    this.setState((curstate) => {
      return {
        showUsers: !curstate.showUsers,
      };
    });
  }
  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("no users provided");
    }
  }
  render() {
    const usersList = (
      <ul>
        {console.log(this.props.users)}
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   return (

//   );
// };

export default Users;
