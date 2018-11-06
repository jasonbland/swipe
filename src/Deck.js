import React, { Component } from 'react';
import { Animated, PanResponder, View } from 'react-native';

class Deck extends Component {
  constructor(props) {
    super(props);

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {},
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder };
  }
  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }
  render() {
    this.state.panResponder;

    return <View {...this.state.panResponder.panHandlers}>{this.renderCards()}</View>;
  }
}

export default Deck;
