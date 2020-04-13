import React from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  // Setting the initial state of the Counter component
  state = {
   friends: friends
  };
  removeCard = (id) => {
    let newArray = this.state.friends.filter((element, i) => i !== id);
    this.setState({ friends: newArray });
  }
  // The render method returns the JSX that should be rendered
  render() {
    return (
          <Wrapper>
            <h1 className="title">Friends List</h1>
            {
              this.state.friends.map((element, i) => {
                return(
                  <FriendCard
                    key={element.name}
                    id={i}
                    name={element.name}
                    image={element.image}
                    occupation={element.occupation}
                    location={element.location}
                    removeCard={this.removeCard}
                  />
                )
              })
            }
          </Wrapper>
        );
  }
}
export default App;
