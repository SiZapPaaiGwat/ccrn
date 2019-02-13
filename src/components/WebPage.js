import React, { Component } from 'react'
import { Text, View, Platform, Alert, ActivityIndicator, StyleSheet, Linking } from 'react-native'
import { WebView } from 'react-native-webview'
import PropTypes from 'prop-types'

const UA = `CC MJB/1.0.0 ${Platform.OS === 'ios' ? 'iPhone' : 'Android'} Mobile`
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

  state = {
    message: ''
  }

  onError = e => {
    this.setState({
      message: e.message
    })
    Alert.alert('网页加载出错')
  }

  renderError = e => {
    return (
      <View style={styles.webview}>
        <Text style={styles.activityIndicator}>
          网页加载失败
          { this.state.message }
        </Text>
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

  onShouldStartLoadWithRequest = e => {
    const { url = '' } = e
    if (url.startsWith('http:') || url.startsWith('https:')) {
      return true
    }

    Linking.canOpenURL(url).then(result => {
      if (result) {
        Linking.openURL(url)
      } else {
        console.log(`could not open url ${url}`)
      }
    })

    return false
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
        onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
        {...rest}
      />
    )
  }
}

export default WebPage
