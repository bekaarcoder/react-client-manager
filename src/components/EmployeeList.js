import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import {employeeFetch} from '../actions/EmployeeActions';
import _ from 'lodash';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentDidMount() {
    console.log("mounted");
    this.props.employeeFetch();
  }

  renderListView() {
    const {employees} = this.props;
    if(typeof employees !== undefined && employees.length > 0) {
      return (
        <FlatList
          data={employees}
          renderItem={({item}) => (
            <EmployeeListItem item={item} />
          )}
          keyExtractor={item => item.uid.toString()}
        />
      )
    }
  }

  render() {
    // console.log(this.props);
    return (
      <View>
        {this.renderListView()}
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  const employees = _.map(state.employeeList, (val, uid) => { // (val == value, uid == key)
    return {...val, uid};
  });
  return {
    employees
  };
}

export default connect(mapStateToProps, {employeeFetch})(EmployeeList);
