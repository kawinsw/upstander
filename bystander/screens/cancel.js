import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const homestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default class CancelPage extends React.Component {
  render() {
    return (
      <View style={homestyles.container}>
        <Text>Is it a real emergency? You can use your voice to talk.
             </Text>
      </View>
    );
  }
}

