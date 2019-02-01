import { observable, action, computed } from 'mobx'
import _ from 'lodash'

class TodoStore {
  @observable todos = []

  @observable removed = []

  @action add (todo) {
    this.todos.unshift({
      ...todo,
      finished: false
    })
  }

  @action del (id) {
    const index = _.findIndex(this.todos, { id })
    if (index < 0) {
      console.log('Not found todo')
      return
    }

    const items = this.todos.splice(index, 1)
    this.removed.unshift(items[0])
  }

  @action delAll () {
    this.todos.length = 0
  }

  @action toggleStatus (id) {
    const index = _.findIndex(this.todos, { id })
    if (index < 0) {
      console.log('Not found todo')
      return
    }

    this.todos[index].finished = !this.todos[index].finished
  }

  @action updateAll (status) {
    this.todos.forEach(item => {
      item.finished = !!status
    })
  }

  @computed get finishedTodos () {
    return this.todos.filter(i => i.finished)
  }

  @computed get unfinishedTodos () {
    return this.todos.filter(i => !i.finished)
  }
}

export default new TodoStore()
