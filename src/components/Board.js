import React from 'react';
import Tile from './Tile.js'

class Board extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {value: ''};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
    return (
        <div className={"Board"}>
	       <p>Sprawdzam, czy działa</p>
	       <Tile/>
	    </div>
	)
 }


export default Board