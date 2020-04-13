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
      vmessJson: Array.from([{"v": "2", "ps": "洛杉矶-GIA", "add": "z10-it7-us-ca.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "洛杉矶-CN2", "add": "f43-it7-us-ca.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "东京-linode", "add": "wbs-wd.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "东京-amazon", "add": "luochengqi.com", "port": "443", "id": "00bb8e49-eb68-448f-998b-a0f2ac11e805", "aid": "64", "net": "ws", "type": "none", "host": "", "path": "/chi", "tls": "tls"}, {"v": "2", "ps": "东京-amazon", "add": "i33-amazon-jp-13.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "东京-linode", "add": "h43-linode-jp-13.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "香港-aliyun", "add": "v59-alibabacom-cn-bj.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "东京-unblocker", "add": "p74-ntt-jp-13.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "伯力-gcore", "add": "g85-gcore-ru-kha.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "伯力-gcore", "add": "k11-gcore-ru-khabarovsk.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "莫斯科-unblocker", "add": "n39-mtw-ru-moscow.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "莫斯科-unblocker", "add": "c85-mtw-ru-mow.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "耶拿-ipv6", "add": "i40-isppro-de-th.gatsbycdn.com", "port": "443", "id": "dfc14022-e16c-44a8-b368-54867fea05f4", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/ipv6euserv", "tls": "tls"}]),
      visibility: 'visible',
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
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',}})
    .then((response) => {
      return response;
    })
    .then(data =>  
      this.setState({usingAdd: data})
    );



  switchConfig = (vmessObj) => {
    console.log('The link was clicked.');
    let prototypeJson = Array.from([{"v": "2", "ps": "洛杉矶-GIA", "add": "z10-it7-us-ca.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "洛杉矶-CN2", "add": "f43-it7-us-ca.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "东京-linode", "add": "wbs-wd.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "东京-amazon", "add": "luochengqi.com", "port": "443", "id": "00bb8e49-eb68-448f-998b-a0f2ac11e805", "aid": "64", "net": "ws", "type": "none", "host": "", "path": "/chi", "tls": "tls"}, {"v": "2", "ps": "东京-amazon", "add": "i33-amazon-jp-13.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "东京-linode", "add": "h43-linode-jp-13.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "香港-aliyun", "add": "v59-alibabacom-cn-bj.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "东京-unblocker", "add": "p74-ntt-jp-13.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "伯力-gcore", "add": "g85-gcore-ru-kha.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "伯力-gcore", "add": "k11-gcore-ru-khabarovsk.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "莫斯科-unblocker", "add": "n39-mtw-ru-moscow.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "莫斯科-unblocker", "add": "c85-mtw-ru-mow.gatsbycdn.com", "port": "443", "id": "de438087-770d-b3a2-bc93-3716a7893227", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/googoogaga", "tls": "tls"}, {"v": "2", "ps": "耶拿-ipv6", "add": "i40-isppro-de-th.gatsbycdn.com", "port": "443", "id": "dfc14022-e16c-44a8-b368-54867fea05f4", "aid": "32", "net": "ws", "type": "none", "host": "", "path": "/ipv6euserv", "tls": "tls"}]);
    let newVmessJson = prototypeJson.filter(obj => obj!==vmessObj);
    this.setState({vmessJson: newVmessJson});
    //this.setState({usingIp: 'Tap to check using IP'});
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


  checkPublicIp = () => {
    console.log('The link was clicked.');
    return fetch('http://luochengqi/digapi.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"add": this.state.usingAdd}) ,
  })}

  shouldComponentUpdate(nextState) {
    if (this.state.usingAdd !== nextState.usingAdd) {
      return true;
    }
    return false;
  }  
  
  componentDidMount() {

    this.updateUsingAdd();
    this.updateUsingIp();

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


    console.log(this.state.usingAdd)
    const that = this//.switchConfig
    const usingAdd = this.state.usingAdd;
    const vmessJson = this.state.vmessJson;
    const listItems = Array.from(vmessJson)
    .filter(obj => obj['add']!==usingAdd)
    .map((obj,index) => {
      return <div className="col-sm-4"><RandomRow randomValue={obj['ps']} 
      key={index}
      visibility={this.state.visibility}
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


