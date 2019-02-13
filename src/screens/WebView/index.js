import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-navigation'
import WebPage from '../../components/WebPage'

export default class WebPageScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', '网页')
    }
  }

  render () {
    // getParam 取到的值为空
    const { uri = 'https://www.coincola.app/' } = this.props.navigation.state.params

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebPage source={{ uri }} />
      </SafeAreaView>
    )
  }
}
