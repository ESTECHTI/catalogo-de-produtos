import React from 'react';
import { Text, StatusBar, View } from 'react-native';

import ListaItens from './src/components/ListaItens';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar 
          hidden={true}
        />
        <ListaItens />
      </View>
      
    );
  }
}

