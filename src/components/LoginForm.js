import React, { Component } from 'react';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, Input, CardSection, Button} from './common';
import { View, Text } from 'react-native';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  };

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }
  renderError() {
    if(this.props.error) {
      return (
        <View>
          <Text style={styles.errorStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
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
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
        {this.renderError()}
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error
});

export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged, loginUser}
)(LoginForm);