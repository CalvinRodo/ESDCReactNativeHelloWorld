import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { StyleSheet, Text, View, Button } from "react-native";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return "unclicked";
  }
}
const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    let title = "title";
    return (
      <Provider store={store}>
        <View style={styles.view}>
          <Text style={{ flex: 8 }}>
            Button has been clicked: {store.getState()}
          </Text>
          <Button
            style={styles.button}
            title="Increment"
            color="#1c578a"
            onPress={() => store.dispatch({ type: INCREMENT })}
          />
          <Button
            style={styles.button}
            title="Decrement"
            onPress={() => store.dispatch({ type: DECREMENT })}
          />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  button: {
    flex: 2,
    backgroundColor: "#cfd1d5",
    color: "#cfd1d5",
    fontSize: 16,
    marginTop: 4,
    marginBottom: 4,
    padding: 10,
  }
});
