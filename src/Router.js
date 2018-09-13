import React from 'react';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="login"
          component={LoginForm}
          title="Login"
          initial
        />
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employee List"
          type={ActionConst.RESET}
          rightTitle="Add"
          onRight={() => console.log('clicked')}
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent;
