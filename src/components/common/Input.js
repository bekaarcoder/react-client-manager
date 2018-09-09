import React from 'react';
import { TextInput, View, Text } from 'react-native'

const Input = ({value, onChangeText, label, placeholder, secureTextEntry}) => {
  const {labelStyle, inputStyle, containerStyle} = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        style={inputStyle}
        onChangeText={onChangeText}
        value={value}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

const styles = {
  inputStyle: {
    color: '#000000',
    paddingRight: 20,
    paddingLeft: 5,
    flex: 2,
    fontSize: 18,
    lineHeight: 15,
    borderBottomWidth: 0,
    textAlignVertical: 'bottom'
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 20,
    color: '#000000'
  },
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    height: 40
  }
}

export {Input};
