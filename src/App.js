import React, { Component } from 'react';
import Transformers from './images.json';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TransformersCard from './components/TransformersCard';
import Footer from './components/Footer';


class App extends Component {
  // Setting the state for images and score
  state = {
    message: "Click an image to begin!",
    curScore: 0,
    topScore: 0,
    Transformers: Transformers,
    notClicked: Transformers
  }

  shuffleArray = array => {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  clickedTransformer = name => {
    let findTransformer = this.state.notClicked.find(item => item.name === name)

    if(findTransformer === undefined) {
      this.setState({
        message: "You guessed incorrectly",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        Transformers,
        notClicked: Transformers
      })
    }
    else {
      let newArray = this.state.notClicked.filter(item => item.name !== name)

      this.setState({
        message: "You guessed correctly",
        curScore: this.state.curScore + 1,
        Transformers,
        notClicked: newArray
      })
    }
    this.shuffleArray(Transformers)
  }

  render() {
    return (
      <Wrapper>
        <Navbar
        message={this.state.message}
        curScore={this.state.curScore}
        topScore={this.state.topScore}
        />  
        <Header />
        <TransformersCard
         image={this.state.Transformers}
         clickedTransformer={this.clickedTransformer}
        />
        <Footer /> 
      </Wrapper>
    )
  };
}


export default App;
