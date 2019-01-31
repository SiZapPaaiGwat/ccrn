import { TodoListScreen, TrashListScreen } from '../screens/Todos/index'
import SettingsScreen from '../screens/Settings/index'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'

const TodoListStack = createStackNavigator(
  {
    TodoList: TodoListScreen,
    Settings: SettingsScreen
  }
)

const TrashListStack = createStackNavigator(
  {
    TrashList: TrashListScreen,
    Settings: SettingsScreen
  }
)

const routes = {
  TodoList: TodoListStack,
  TrashList: TrashListStack
}

export const initialRouteName = 'TodoList'

export const AppNavigator = createAppContainer(createBottomTabNavigator(routes))
