import React from 'react';
import { TouchableOpacity, Text } from 'react-native'

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  )
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#17a2b8',
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#FFFFFF'
  },
  textStyle: {
    fontSize: 16,
    color: '#17a2b8',
    alignSelf: 'center',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export {Button};
