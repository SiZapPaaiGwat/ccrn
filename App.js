import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'mobx-react/native'
import stores from './src/stores'
import { AppNavigator } from './src/routes'

export default class App extends Component {
  render () {
    return (
      <Provider {...stores}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </Provider>
    )
  }
}
