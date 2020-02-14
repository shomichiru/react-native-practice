// screens/TodoReactReduxExample/List

import React, { Component } from "react";
import {
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

export default class List extends Component {
  renderItem = (text, i) => {
    const { onPressItem } = this.props;

    return (
      <TouchableOpacity
        key={i}
        style={styles.item}
        onPress={() => onPressItem(i)}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { list } = this.props;

    return <View>{list.map(this.renderItem)}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: "whitesmoke",
    marginBottom: 5,
    padding: 15
  }
});
