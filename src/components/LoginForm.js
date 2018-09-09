import React, { Component } from 'react';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged} from '../actions';
import {Card, Input, CardSection, Button} from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  };

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="xyz@email.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password
});

export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged}
)(LoginForm);