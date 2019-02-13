import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput
} from 'react-native'
import { inject, observer } from 'mobx-react/native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  title: {
    color: 'rgba(175, 47, 47, 0.15)',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  inputWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    padding: 10
  },
  row: {
    height: 40,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 30
  }
})

@inject('todoStore')
@observer
class TodoList extends Component {
  static propTypes = {
    todoStore: PropTypes.object,
    navigation: PropTypes.object
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  state = {
    userInput: ''
  }

  addTodo = () => {
    const { todoStore } = this.props
    todoStore.add({
      id: Date.now().toString(16),
      text: this.state.userInput,
      finished: false
    })
    this.setState({
      userInput: ''
    })
  }

  renderTodos = () => {
    const { todoStore } = this.props
    return todoStore.todos.map(todo => {
      return (
        <View style={styles.row} key={todo.id}>
          <Text>{todo.text}</Text>
        </View>
      )
    })
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.title} onPress={this.addTodo}>
          TODO List
        </Text>
        <View style={styles.inputWrapper}>
          <TextInput
            ref={el => (this.input = el)}
            style={{ height: 40 }}
            placeholder="Anything to do ?"
            onChangeText={text => this.setState({ userInput: text })}
            keyboardType="default"
            autoCapitalize="none"
            spellCheck={false}
            autoCorrect={false}
            value={this.state.userInput}
            onSubmitEditing={this.addTodo}
            focus={!this.state.userInput}
            blurOnSubmit={false}
          />
        </View>
        <ScrollView>{this.renderTodos()}</ScrollView>

        <Text
          onPress={e => {
            this.props.navigation.navigate('Register', {
              title: '注册',
              uri:
                'https://www.coincola.app/acts/landing-page-cn?utm_source=mjb'
            })
          }}
        >
          Register
        </Text>
        <Text
          onPress={e => {
            this.props.navigation.navigate('Register', {
              title: '下载',
              uri: 'https://www.coincola.app/app/download?utm_source=mjb'
            })
          }}
        >
          Download
        </Text>
      </View>
    )
  }
}

@inject('todoStore')
@observer
class TrashList extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Text>Trash List</Text>
      </View>
    )
  }
}

export const TodoListScreen = TodoList

export const TrashListScreen = TrashList
