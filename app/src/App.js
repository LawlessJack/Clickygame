import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    friends,
    highScore: 0,
    currentScore: 0,
    Clicked: false
  };
  handleClick = id => {
    this.shuffleArray();
    this.handleScore(id);
    console.log(this.state.Clicked);
  };

  handleScore = id => {
    this.state.friends.forEach(element => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        this.setState({ Clicked: false });
        this.handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        if (this.state.currentScore > this.state.highScore) {
          this.setState({ highScore: this.state.currentScore });
        }
        this.setState({ currentScore: 0 });
        this.setState({ Clicked: true });
        this.state.friends.forEach(element => (element.clicked = false));
        console.log(this.state.friends);
      }
    });
  };

  shuffleArray = () => {
    // Shuffle array of objects
    const shuffledArr = this.shuffle(this.state.friends);
    // Setting 'shuffledArr' as the new state
    this.setState({ shuffledArr });
  };

  // handleIncrement increments this.state.currentScore by 1
  handleIncrement = () => {
    // Using setState method to update component's state
    this.setState({ currentScore: this.state.currentScore + 1 });
  };

  // Function that takes an array as a parameter and shuffles it
  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };


  // The render method returns the JSX that should be rendered
  render() {
    return (
      <Wrapper>
        <h1>Current Score= {this.state.currentScore}</h1>
        <h1>High Score= {this.state.highScore}</h1> 
        {
          this.state.friends.map((element) => {
            return (
              <FriendCard
                Clicked={this.state.Clicked}
                handleClick={this.handleClick}
                key={element.id}
                id={element.id}
                name={element.name}
                image={element.image}
                occupation={element.occupation}
                location={element.location}
              />
            )
          })
        }
      </Wrapper>
    );
  }
}
export default App;
