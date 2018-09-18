import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection} from './common';

class EmployeeListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({
      employee: this.props.item
    });
  }

  render() {
    const {name} = this.props.item;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.textStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  textStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5
  }
};

export default EmployeeListItem;