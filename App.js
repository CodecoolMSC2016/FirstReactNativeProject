import React from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid, ScrollView, Image, TextInput } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

export default class App extends React.Component {
    render() {
      return (
          <View style={styles.container}>
              <ScrollView>
                  <Text></Text>
                  <Text></Text>
                  <Text style={{ fontSize: 23 }}>Ez az elso telefonos appom.</Text>
                  <Text style={{ fontSize: 23 }}>Ez itt meg egy gomb</Text>
                  <Button title="gomb" onPress={this.he}></Button>
 
        </ScrollView>

      </View>
    );
  }

  he = () => { 
      alert("mit nyomkodsz buzi?");

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
