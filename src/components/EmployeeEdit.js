import React, { Component } from 'react'
import { Text, View } from 'react-native';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave} from '../actions/EmployeeActions';
import {Card, CardSection, Button} from './common';

class EmployeeEdit extends Component {
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
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(EmployeeEdit);
