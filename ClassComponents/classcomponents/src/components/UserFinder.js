import { Fragment, Component } from "react";
import Users from "./Users";
import classes from "./UserFinder.module.css";
import ErrorBoundary from "./ErrorBoundary";
import UsersContext from "../store/users-context";

class UserFinder extends Component {
  static contextType = UsersContext;
  constructor(props) {
    super(props);
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }
  componentDidMount() {
    this.setState({
      filteredUsers: this.context.users,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler} />
        </div>
        <ErrorBoundary>
          {" "}
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default UserFinder;
