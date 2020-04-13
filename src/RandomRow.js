import React, { Component } from 'react';

export class RandomRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {

        var boxStyle = {
            padding: 10,
            margin: 10,
            backgroundColor: "white",
            WebkitFilter: "drop-shadow(0px 0px 4px #666)",
            color: "black",
            fontSize: "1rem",
            textAlign: "center",
            //border: 2,
            fontFamily: "Arial",
            borderRadius: "1%",
        };

        return(
        <div style={boxStyle} 
            onClick={this.props.handleOnclick} 
            value={this.props.randomValue}>
            {this.props.randomValue}
        </div>
    )}

}

