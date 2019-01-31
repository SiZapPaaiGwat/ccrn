import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { inject, observer } from 'mobx-react/native'

@inject('todoStore')
@observer
class TodoList extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Text>TODO List</Text>
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
