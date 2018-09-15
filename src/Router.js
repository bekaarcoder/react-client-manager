import React from 'react';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import {Actions} from 'react-native-router-flux';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="login"
          component={LoginForm}
          title="Login"
        />
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employee List"
          type={ActionConst.RESET}
          rightTitle="Add"
          onRight={() => Actions.employeeForm()}
          initial
        />
        <Scene
          key="employeeForm"
          component={EmployeeCreate}
          title="Add Employee"
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent;
