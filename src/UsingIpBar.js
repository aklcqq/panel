import React, { Component } from 'react';
//import { configPrint } from './usingConfig';

export class UsingIpBar extends Component {


    render () {

        var boxStyle = {
            padding: 10,
            //margin: 5,
            backgroundColor: "white",
            //WebkitFilter: "drop-shadow(0px 0px 4px #666)",
            color: "black",
            fontSize: "1rem",
            textAlign: "center",
            border: 2,
            fontFamily: "Arial",
            borderRadius: "1%",
        };

        return(
        <div style={boxStyle} onClick={this.props.onClick} className={this.props.className}>
            Public IP: { this.props.usingIp }
        </div>
    )}
}




