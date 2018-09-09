import React from 'react';
import { View, Text } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#dddddd',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderBottomWidth: 0
  }
}

export {Card};
