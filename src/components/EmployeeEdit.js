import React, { Component } from 'react'
import { Text, View } from 'react-native';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions/EmployeeActions';
import {Card, CardSection, Button} from './common';
import Confirm from './Confirm';

class EmployeeEdit extends Component {
  state = {
    showModal: false
  };

  componentDidMount() {
    const {employee} = this.props;
    Object.keys(employee).forEach(prop => {
      const value = employee[prop];
      this.props.employeeUpdate({prop, value});
    });
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  }

  onTextSend() {
    const {phone, shift} = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onRemovePress() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  onAccept() {
    const uid= this.props.employee.uid;
    this.props.employeeDelete({uid});
  }

  onDecline() {
    this.setState({
      showModal: false
    });
  }

  render() {
    console.log(this.props);
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextSend.bind(this)}>
            Send Message
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onRemovePress.bind(this)}>
            Remove Employee
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure to delete the details of the employee?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
