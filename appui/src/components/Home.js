import React, { Component } from 'react';
import { List, Typography, Icon, Divider } from 'antd';
const { Title, Paragraph } = Typography;

/**
 * Home Page
 * Contains some information about the project.
 * Future Improvements:
 *   - Customize home page based on user
 *   - Allow users to select a manager or parker profile and create different home page
 *   - Display useful stats on home page, money made, locations parked at, etc.  Fun stuff.
 *   - Donation button
 */
export default class Home extends Component {
	constructor(props) {
		super(props);
	}


  render() {
    const listData = [
      'Partner disappears due to health problem.',
      'Web3 keeps returning undefined values.',
      'Probably bit off more than I could chew!'
    ]

    const listData2 = [
      'Cryptocurrency',
      'Blockchain Tech',
      'Solidity',
      'All the awesome dApp tools',
      'React',
      'NodeJS',
      'Cryptography'
    ]
    return(
    	<div className='Home'>
    			<Title level={2}>About</Title>
          <Paragraph>
            This project aims to create a full-stack parking reservation dApp.  The back end is run on a local
            server using Ganache and Truffle to create a local blockchain.  For the front-end
            this project uses React with the help of Ant Design components.  Web3js is used
            to interact with the ethereum smart contract. <br /> 
            Note: Currently the back-end is not functional, so the UI is mostly a mockup to represent
            what could be implemented on a working smart contract.
          </Paragraph>
          <Divider />
          <Title level={2}>The Contract</Title>
          <Paragraph>
            The contract is written in solidity and has a few basic functions.  There are manager functions
            to create a new lot, and add spaces to an existing lot.  The user is able to view open spots
            and send a request to reserve a parking spot.
          </Paragraph>
          <Divider />
          <Title level={2}>Challenges</Title>
          <List 
            bordered 
            header={<Icon type="meh" theme='twoTone' twoToneColor='#eb2f96' />}
            dataSource={listData} 
            renderItem={item => <List.Item>{item}</List.Item>} 
          />
          <Divider />
          <Title level={2}>Lesson Learned</Title>
          <List 
            bordered 
            header={<Icon type="smile" theme='twoTone' twoToneColor='#52c41a' />}
            dataSource={listData2} 
            renderItem={item => <List.Item>{item}</List.Item>} 
          />
    	</div>
  	)
  }
}