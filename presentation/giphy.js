import React, { Component } from "react";
import { Heading, Image } from "spectacle";

export default class GiphyLocal extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://localhost:3000'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      url: 'http://localhost:3000/?rand=' + Math.random()
    });
  }
  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };
    return (
      <div>
        <div>
          <Image fit src={this.state.url}/>
          <br/>
          <button style={styles} type="button" onClick={this.handleClick}>Reload</button>
        </div>
      </div>
    );
  }
}
