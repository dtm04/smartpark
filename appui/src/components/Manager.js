import React, { Component } from 'react';
import { Modal, Form, Input, Button, List, Card } from 'antd';

/**
 * Manager Component
 *  The manager is allowed to view his current parking lots and manage them.
 *  He can create a new lot and add it to his collection.
 *  Future Improvements:
 *    - Editing currently available lots (prices and number of spaces)
 *    - Add new lots to the state to be displayed on this page.
 *    - Allow de-listing a parking lot.
 *    - Connect the functions to a working Web3
 */
export default class Manager extends Component {
	constructor(props) {
		super(props);
      // TODO: Get real back-end data
      this.state = {
        managedLots: [
          {
            name: 'Lot 1',
            numSpots: 10,
            availSpots: 7,
            price: 0.1
          }, {
            name: 'Lot 2',
            numSpots: 50,
            availSpots: 3,
            price: 0.25
          }, {
            name: 'New Lot',
            numSpots: 30,
            availSpots: 30,
            price: 0.1
          }
        ],
        visible: false
      }

      this.showModal = this.showModal.bind(this);
      this.renderModalForm = this.renderModalForm.bind(this);
      this.hideModal = this.hideModal.bind(this);
      this.onCreateLot = this.onCreateLot.bind(this);
	}

  async componentDidMount() {
    
  }

  // TODO: create a new contract instance for this address, update state vars for UI
  onCreateLot(e) {
    // simulated due to problems with web3
    console.log(e);
    this.hideModal();
  }

  showModal() {
    this.setState({ visible: true });
  }

  hideModal() {
    this.setState({ visible: false });
  }

  renderModalForm() {
    return null;
  }


  render() {
    const myLots = this.state.managedLots;
    const { visible } = this.state;
    return(
    	<div className='Manager'>
    		<List 
          grid={{ gutter: 12, column: 4 }}
          dataSource={myLots}
          renderItem={item => (
            <List.Item>
              <Card title={item.name}>
                Total spots: {item.numSpots} <br/> 
                Available: {item.availSpots} <br /> 
                Current Price: {item.price} eth
              </Card>
            </List.Item>
          )}
        />
        	<Modal
          visible={visible}
          title="Create a new parking lot"
          okText="Create"
          onOk={this.onCreateLot}
          onCancel={this.hideModal}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              <Input />
            </Form.Item>
            <Form.Item label="Number of spots">
              <Input />
            </Form.Item>
            <Form.Item label="Price (eth)">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        <div>
          <Button onClick={this.showModal} type="primary">
            Create Lot
          </Button>
        </div>
      </div>
  	)
  }
}