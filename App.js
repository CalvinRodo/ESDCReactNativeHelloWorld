import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Header extends React.Component{
  render({pageTitle} = this.props){
    return(
      <View>
        <Text style={styles.header}>Page Header - {pageTitle} </Text>
      </View>
    );
  } 
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header pageTitle="Home"/>
        <Text>Hello World.</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
   fontSize: 19,
   fontWeight: 'bold',
   fontFamily: 'Roboto'
  }
});
