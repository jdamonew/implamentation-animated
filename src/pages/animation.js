
import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {

    const { navigate } = this.props.navigation;

    return (

      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../assets/animation/ok_green.json')}
          onAnimationFinish={() => navigate('SecondPage')}
          loop={false}
          autoPlay
          speed={0.6}
        />

      </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#38c172'
  }

})

