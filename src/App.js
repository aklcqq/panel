import React, { Component } from 'react';
import { UsingAddBanner } from './UsingAddBanner';
import { RandomRow } from './RandomRow';
import { UsingIpBar } from './UsingIpBar';

//import { updateJson } from './UsingAddBanner';

export default class App extends Component {

  /**  */
  constructor(props) {
    super(props);
    this.state = {
      usingAdd: 'Tap to check using config',
      vmessJson: 'Tap to update config',
      usingIp: 'Tap to check using IP'
    }
  };



  updateUsingAdd = () => {
    return fetch('http://192.168.10.2/api.php', {method: 'get',})
  .then((response) => {
    return response.text();
  })
  .then(data =>  
    this.setState({usingAdd: data})
  )};

  updateUsingIp = () => fetch('http://192.168.10.2/digapi.php', {method: 'get',})
  .then((response) => {
    return response.text();
  })
  .then(data => {
    return this.setState({usingIp: data})
    }
  );

  updateJson = () => fetch('http://192.168.10.2/genJSON.php', {
    method: 'GET',
    /**/headers: {
      Accept: 'application/json',
    'Content-Type': 'application/json',}/**/})
    .then((response) => {
      return response.json();
    })
    .then(data => {
      console.log(data)
      return this.setState({vmessJson: Array.from(data)})
      
    });



  switchConfig = (vmessObj) => {
    console.log('The link was clicked.');
    this.updateJson();
    let prototypeJson = this.state.vmessJson;
    let newVmessJson = prototypeJson.filter(obj => obj!==vmessObj);
    this.setState({vmessJson: newVmessJson});
    console.log(this.state.vmessJson)
    return fetch('http://192.168.10.2/switchConfig.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vmessObj) ,
  }).then((response) => {
    if(response.ok) {
      this.updateUsingIp();
      this.updateUsingAdd();
    }
  })
  }

  shouldComponentUpdate(nextState) {
    if (this.state.usingAdd !== nextState.usingAdd) {
      return true;
    }
    return false;
  }  
  
  componentDidMount() {


    this.updateUsingAdd();
    this.updateUsingIp();
    this.updateJson();
    /* this.timerID = setInterval(
      () => this.updateUsingAdd(),
      1000
    ) */
  }


  componentDidUpdate(prevProps) {
    if (this.props.usingAdd !== prevProps.usingAdd) {
      this.updateUsingIp();
    } 
  }

  componentWillUnmount() { /*
    clearInterval(this.timerID);
    */
  }

  render() {

    console.log(this.state.vmessJson)



    console.log(this.state.usingAdd)
    const that = this//.switchConfig
    const usingAdd = this.state.usingAdd;
    const vmessJson = this.state.vmessJson;
    const listItems = Array.from(vmessJson)
    .filter(obj => obj['add']!==usingAdd)
    .map((obj,index) => {
      return <div className="col-sm-4" key={index}>
        <RandomRow randomValue={obj['ps']}
        handleOnclick={() => {
          that.switchConfig(obj);
        }}/></div>});


    
    return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="row">
          <UsingAddBanner 
            usingAdd={this.state.usingAdd}
            onClick={this.updateUsingAdd}
            className="col-md col-sm-12"
          />
          <UsingIpBar 
            usingIp={this.state.usingIp}
            onClick={this.updateUsingIp}
            className="col-md col-sm-12" 
          />
          </div>
        </div>
      </div>
      <br></br>
      <div className="container-fluid">
        <div className="row">
          {listItems}
        </div>
      </div>
    </div>
    )
  }

}


