import React, { Component } from "react";
import { Contract, account0 } from "../config";
import {
  Form,
  DatePicker,
  TimePicker,
  Drawer,
  Table,
  Button,
  InputNumber,
  message
} from "antd";
const { Column } = Table;

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numSpots: 30,
      drawerOpen: false
    };

    // WHY IS IT UNDEFINED????
    console.log(account0);
    console.log(Contract.options);
    this.getAvailableSpots = this.getAvailableSpots.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.handleReserve = this.handleReserve.bind(this);
    this.drawerClose = this.drawerClose.bind(this);
    this.onNumHoursChange = this.onNumHoursChange.bind(this);
  }

  async componentDidMount() {
    let spots = await Contract.methods.numSpots().call();
    console.log(spots);
    //this.setState({ numSpots: spots });
  }

  async getNumSpots() {
    try {
      return await Contract.methods.numSpots().call();
    } catch (e) {
      console.log(e);
      return -1;
    }
  }

  handleReserve() {
    // await Contract.methods.reserveSlot(numHours).call();
    this.setState({ drawerOpen: true });
  }

  drawerClose() {
    this.setState({ drawerOpen: false });
  }

  // TODO: Validate, update vars
  onTimeChange(time, timeString) {
    console.log(time, timeString);
  }

  onNumHoursChange(value) {
    console.log(`${value} hours`);
  }

  // TODO: Web3 API call
  getAvailableSpots() {
    // loop through spots
    // create a json object for each
    // use format to display in table
    const data = [];
    for (let i = 0; i < this.state.numSpots; i++) {
      let spot = {
        key: i,
        address: account0,
        price: "0.1 ETH"
      };
      data.push(spot);
    }

    return data;
  }

  renderParkingSpots() {}

  render() {
    const dataSource = this.getAvailableSpots();
    const onReserve = () => {
      message.success('This is a success message');
    }

    return (
      <div className="user">
        <Table dataSource={dataSource}>
          <Column title="Manager" dataIndex="address" key="address" />
          <Column title="Price" dataIndex="price" key="price" />
          <Column
            title="Reserve"
            key="reserve"
            render={() => (
              <span>
                <Button
                  type="primary"
                  shape="circle"
                  icon="check"
                  onClick={this.handleReserve}
                />
              </span>
            )}
          />
        </Table>
        <Drawer
          title="Reserve a parking spot"
          width={400}
          onClose={this.drawerClose}
          visible={this.state.drawerOpen}
        >
          <Form layout="vertical">
            <Form.Item label="Date">
              <DatePicker renderExtraFooter={() => "Select Parking Date"} />
            </Form.Item>
            <Form.Item label="Start time">
              <TimePicker
                onChange={this.onTimeChange}
                addon={() => "Select Start Time"}
              />
            </Form.Item>
            <Form.Item label="Number of hours">
              <InputNumber
                min={1}
                max={24}
                defaultValue={1}
                onChange={this.onNumHoursChange}
                formatter={value => `${value} hour(s)`}
              />
            </Form.Item>
          </Form>
          <div
            style={{
              position: "absolute",
              left: 5,
              bottom: 5,
              width: "100%",
              borderTop: "1px solid #e9e9e9",
              padding: "10px 16px",
              background: "#fff",
              textAlign: "right"
            }}
          >
            <Button onClick={this.drawerClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={onReserve} type="primary">
              Reserve
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}
