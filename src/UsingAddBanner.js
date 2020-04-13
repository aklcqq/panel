import React, { Component } from 'react';
//import { configPrint } from './usingConfig';

export class UsingAddBanner extends Component {


    render () {

        var boxStyle = {
            padding: 10,
            //margin: 5,
            backgroundColor: "lavenderblush",
            //WebkitFilter: "drop-shadow(0px 0px 4px #666)",
            color: "black",
            fontSize: "1rem",
            textAlign: "center",
            border: 2,
            fontFamily: "Arial",
            borderRadius: "1%",
        };

        var linkBox = {
            color: 'black',
            textDecoration: 'none',
            
        };

        let url = this.props.usingAdd
        url = "https://" + url + "/speedtest/index.html";

        return(
            <div style={boxStyle} onClick={this.props.onClick} className={this.props.className}>
                <a style={linkBox} href={url}>{ this.props.usingAdd }</a>
            </div>
    )}
}




