import React, { Component } from 'react'
import { Text, View, Platform, Alert, ActivityIndicator, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import PropTypes from 'prop-types'

const UA = `CoinCola/1.0.0 ${Platform.OS === 'ios' ? 'iPhone' : 'Android'} Mobile`
const styles = StyleSheet.create({
  webview: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 0
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
})

class WebPage extends Component {
  static propTypes = {
    source: PropTypes.object.isRequired
  }

  onError = e => {
    Alert.alert('网页加载出错')
  }

  renderError = e => {
    return (
      <View style={styles.webview}>
        <Text style={styles.activityIndicator}>网页加载失败</Text>
      </View>
    )
  }

  renderLoading = e => {
    return (
      <ActivityIndicator
        color="#666"
        size="large"
        style={styles.activityIndicator}
      />
    )
  }

  render () {
    const { source, ...rest } = this.props

    return (
      <WebView
        source={source}
        style={styles.WebViewStyle}
        userAgent={UA}
        renderError={this.renderError}
        onError={this.onError}
        renderLoading={this.renderLoading}
        startInLoadingState
        {...rest}
      />
    )
  }
}

export default WebPage
