import todoStore from '../TodoStore'

beforeEach(() => {
  todoStore.reset()
})

describe('TodoStore', function () {
  it('should add a todo to list', function () {
    todoStore.add({
      id: 1,
      text: 'Wake up'
    })
    expect(todoStore.todos.length === 1)
    expect(todoStore.todos[0].text === 'Wake up')
    expect(todoStore.todos[0].finished === false)
  })

  it('should prepend to the head of the list', function () {
    todoStore.add({
      id: 1,
      text: 'Wake up'
    })
    todoStore.add({
      id: 2,
      text: 'Wake up 2'
    })
    expect(todoStore.todos[0].id === 2)
    expect(todoStore.todos.length === 2)
  })
})
