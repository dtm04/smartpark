import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from "antd";
import Routes from './Routes';
import Logo from './assets/WIT-shield.png'
import { Contract, account0 } from "./config";
import './App.css';
//import { ratingContract, account0 } from "./config";

const { Header, Content, Footer } = Layout;

/**
 * Main App file
 * Uses Routes from react-router-dom to handle page navigation.  Contains a navigation header.
 * Future Improvements:
 *   - User Authentication and account management
 *   - Integrate with metamask
 *   - Provide some user verification.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingLots: [
        { manager: "0x43284414d6f3ba61407e3055171402b9e38992ee", numSpots: 20 }
      ],
      showAlert: false,
      numSpots: 99,
    };
  }

  async componentDidMount() {
    let spots = await Contract.methods.numSpots().call();
    console.log(spots);
    this.setState({ numSpots: spots });
  }

  render() {
    return (
      <Layout className='nav-layout'>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>          
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/user/'>User</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/manager/'>Manager</Link></Menu.Item>            
          </Menu>                  
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{padding: 24, minHeight: 280, background:'#fff'}} >
            <Routes />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Donald MacPhail -- Blockchain @ WIT <br />
          Contact: dmacphail1@gmail.com -- github.com/dtm04
          <img className='wit-logo' src={Logo} alt='logo'/> 
        </Footer>
      </Layout>
    );
  }
}

export default withRouter(App);
